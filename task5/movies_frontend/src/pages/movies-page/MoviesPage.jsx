import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from '../../components/header/Header.jsx';
import MoviesList from '../../components/movies-list/MoviesList.jsx';
import { Divider, Typography } from '@mui/material';
import MovieDetails from '../../components/movie-details/MovieDetails.jsx';

export function MoviesPage() {
  return (
    <>
      <Header />
      <Grid container component="main" columns="14" sx={{ height: '100vh', marginTop: '4.44rem' }}>
        <CssBaseline />
        <Grid item md={5} component={Paper} square>
          <MoviesList />
          <Divider />
          <Typography variant="body2" color="text.secondary" style={{paddingTop: '0.37rem', paddingBottom: '0.44rem'}}>
            Найдено фильмов: 3
          </Typography>
        </Grid>
        <Grid item md={9} component={Paper} square>
          <MovieDetails id='154' 
          title='Властелин колец' 
          posterUrl='https://s3-alpha-sig.figma.com/img/e287/fa42/ed92425e029c018b1a8d931d03696881?Expires=1704672000&Signature=cebaWabdgfU94f42VveZW3KXs-NGR~7fz1P~3j3WSzik7yG~JfZFsK4SHKyIRT0kK2S-4yUBkjglHywTG8CGbBlcuGkZZAb7MoVhGz~qI3zxjqdaOt-uHU5w0NZdsHOfEe7nPOWYZR4wxtlcqHMvdP47mw5f9dOxX7PXKSP36YSxNtFzbOuxA1-t38X11f~ZD613qJfbjxNsn9f1dEqIAAIN48VvXhL7edQrK51gwDQjLotA5y3Xa7gYjwCtGk9uJNU5PzV5dZzd2Jjd7xDDMupmHtmOPf8JNSL1HYdx2UlZegwMd9cKXsu5OOlPI7JCdOxGY1HVPiSeikCdjILE2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          director='Питер Джексон'
          year='2001'
          runtime='178'
          genres={['фэнтези', 'боевик', 'приключения']}
          plot='Тупо описание: Несмотря на то, что наступили времена относительного мира, герои вынуждены противостоять возрождению зла в Средиземье.  Повсюду — от самых мрачных глубин Мглистых гор до величественных лесов Линдона, захватывающего дух островного королевства Нуменор и самых дальних уголков мира — в каждом королевстве герои событий создают наследие, которое будет жить еще долго после их ухода.'
          rating='8.8'
          actors={['Элайджа Вуд', 'Вигго Мортенсен', 'Иэн МакКеллен', 'Орландо Блум', 'Доминик Монахэн', 'Билли Бойд', 'Шон Эстин', 'Энди Серкис', 'Хьюго Уивинг', 'Миранда Отто', 'Джон Рис-Дэвис', 'Карл Урбан', 'Бернард Хилл', 'Лив Тайлер', 'Кристофер Ли', 'Сиан Филлипс', 'Энди Серкис', 'Шон Бин', 'Хьюго Уивинг', 'Мартон Чокаш', 'Кейт Бланшетт', 'Брэд Дуриф', 'Карл Урбан', 'Брюс Спенс', 'Киран Шах', 'Энди Серкис', 'Шон Эстин', 'Джон Ноубл', 'Брэд Дуриф', 'Карл Урбан', 'Брюс Спенс', 'Киран Шах', 'Энди Серкис', 'Шон Эстин', 'Джон Ноубл', 'Брэд Дуриф', 'Карл Урбан', 'Брюс Спенс', 'Киран Шах', 'Энди Серкис', 'Шон Эстин', 'Джон Ноубл', 'Брэд Дуриф', 'Карл Урбан', 'Брюс Спенс', 'Киран Шах', 'Энди Серкис', 'Шон Эстин', 'Джон Ноубл', 'Брэд Дуриф', 'Карл Урбан', 'Брюс Спенс', 'Киран Шах']}
          />
        </Grid>
      </Grid>
    </>
  );
}
