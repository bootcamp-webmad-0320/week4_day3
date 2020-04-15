const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

hbs.registerPartials(path.join(__dirname, 'views', 'partials'))    // Partials

app.get('/', (req, res, next) => res.render('index'))
app.get('/jugadores', (req, res, next) => {

    const playersInfo = [
        {
            'name': 'Rusell',
            'lastName': 'Westbrook',
            'team': 'OKC',
            'photo': 'https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg'
        },
        {
            'name': 'Kevin',
            'lastName': 'Durant',
            'team': 'GSW',
            'photo': 'https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
        },
        {
            'name': 'Lebron',
            'lastName': 'James',
            'team': 'CLE',
            'photo': 'https://usatftw.files.wordpress.com/2018/01/ap_cavaliers_timberwolves_basketball.jpg?w=1000&h=600&crop=1'
        },
        {
            'name': 'Emanuel',
            'lastName': 'Ginóbilli',
            'team': 'SAS',
            'photo': 'https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg'
        },
        {
            'name': 'Kyrie',
            'lastName': 'Irving',
            'team': 'BOS',
            'photo': 'https://usatftw.files.wordpress.com/2019/11/ap-pacers-nets-basketball-e1574887407850.jpg?w=1000&h=600&crop=1'
        }
    ]

    res.render('players', { players: playersInfo })

})
app.get('/equipos', (req, res, next) => res.render('teams'))



app.listen(3000, () => console.log("App listening on port 3000"))