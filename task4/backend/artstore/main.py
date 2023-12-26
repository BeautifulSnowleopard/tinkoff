from fastapi import FastAPI, HTTPException, APIRouter
from pydantic import BaseModel, ConfigDict
from starlette.middleware.cors import CORSMiddleware

app = FastAPI(title="ArtStore", version="0.1.0")

app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_methods=["*"],
        allow_headers=["*"],
        expose_headers=["*"]
)

# FIXME: we use this as a temporary storage for the art pieces, this should be replaced with a database
art_storage = {
  0: {
    "id": 0,
    "name": 'Богатыри',
    "description": 'Над картиной работали около двадцати лет.',
    "linkToImage":
      r'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Viktor_Vasnetsov_-_%D0%91%D0%BE%D0%B3%D0%B0%D1%82%D1%8B%D1%80%D0%B8_-_Google_Art_Project.jpg/760px-Viktor_Vasnetsov_-_%D0%91%D0%BE%D0%B3%D0%B0%D1%82%D1%8B%D1%80%D0%B8_-_Google_Art_Project.jpg',
    "author": 'Виктор Васнецов',
  },
  1: {
    "id": 1,
    "name": 'Опять двойка',
    "description": 'Хранится в Третьяковской галере.',
    "linkToImage":
      r'https://upload.wikimedia.org/wikipedia/ru/thumb/1/14/Opyat_dvoyka.jpg/300px-Opyat_dvoyka.jpg',
    "author": 'Фёдор Решетников',
  },
  2: {
    "id": 2,
    "name": 'Лютнист',
    "description": 'Картина существует в трёх версиях.',
    "linkToImage":
      r'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Michelangelo_Caravaggio_020.jpg/680px-Michelangelo_Caravaggio_020.jpg',
    "author": 'Караваджо',
  },
  3: {
    "id": 3,
    "name": 'Кружевница',
    "description": 'Находится в парижском музее Лувр.',
    "linkToImage":
      r'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg/700px-Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg',
    "author": 'Ян Вермеер',
  },
  4: {
    "id": 4,
    "name": 'Неизвестная',
    "description": 'Портрет часто ошибочно называют «Незнакомка».',
    "linkToImage":
      r'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Kramskoy_Portrait_of_a_Woman.jpg/650px-Kramskoy_Portrait_of_a_Woman.jpg',
    "author": 'Иван Крамской',
  }
}

default_values = art_storage.copy()


class ArtPiece(BaseModel):
    id: int = None
    name: str
    description: str
    linkToImage: str
    author: str

    model_config = ConfigDict(extra='forbid')  


api_router = APIRouter(prefix="/api/v1/art", tags=["art"])

@api_router.get("/default/")
async def set_default_values():
    global art_storage
    art_storage = default_values.copy()
    return list(art_storage.values())


@api_router.get("/")
async def get_all():
    return list(art_storage.values())


@api_router.get("/{id}")
async def get_by_id(id: int):
    try:
        return art_storage[id]
    except KeyError:
        raise HTTPException(status_code=404, detail="Item not found")


@api_router.post("/")
async def add_art_piece(piece: ArtPiece):
    if art_storage:
      last_id = max(art_storage.keys())
    else:
      last_id = 0
    piece.id = last_id+1
    art_storage[piece.id] = piece.model_dump()
    return art_storage[piece.id]


@api_router.delete("/{id}")
async def delete_art_piece(id: int):
    try:
        value = art_storage[id]
        art_storage.pop(id)
    except KeyError:
        raise HTTPException(status_code=404, detail="Item not found")
    return value


@api_router.put("/{id}")
async def update_art_piece(id: int, piece: ArtPiece):
    try:
        piece.id = id
        art_storage[id] = piece.model_dump()
        return art_storage[id]
    except KeyError:
        raise HTTPException(status_code=404, detail="Item not found")

@api_router.get("/author/")
async def get_application_author():
    return "Маршунина Мария 6407"


app.include_router(api_router)

def start():
    import uvicorn
    # only for dev environment
    uvicorn.run(app, host="0.0.0.0", port=3001)


if __name__ == "__main__":
    start()