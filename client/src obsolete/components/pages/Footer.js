import React, { useEffect, useState } from 'react';
import API from '../utils/API';

const styles = {
    container: {
        //backgroundColor: "darkslategray",
        // width: "100%",
        //height: "5%",
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "1px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "100px",
        width: "100%",
    },
    image: {
        height: "100%",
        padding: "5px"
    }
}

function Footer() {
    let heroarray = [];
    const [heroes, setHeroes] = useState([
        "https://www.superherodb.com/pictures2/portraits/10/100/1365.jpg",

        "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg",
        "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg",
        "https://www.superherodb.com/pictures2/portraits/10/100/161.jpg",
        "https://www.superherodb.com/pictures2/portraits/10/100/689.jpg",
        "https://www.superherodb.com/pictures2/portraits/10/100/444.jpg",
        "https://www.superherodb.com/pictures2/portraits/10/100/956.jpg",
        "https://www.superherodb.com/pictures2/portraits/10/100/1358.jpg",
        "https://www.superherodb.com/pictures2/portraits/10/100/181.jpg",
        "https://www.superherodb.com/pictures2/portraits/10/100/10422.jpg",
        "https://www.superherodb.com/pictures2/portraits/10/100/1448.jpg",
        "https://www.superherodb.com/pictures2/portraits/10/100/630.jpg",
        "https://www.superherodb.com/pictures2/portraits/10/100/140.jpg"
    ])
    function makeid(length) {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return API.searchall(result).then(res => {
            return res.image.url;
        });
    }
    useEffect(() => {
        const imagePromises = [
            // makeid(1),
            // makeid(1),
            // makeid(1),
            // makeid(1),
            // makeid(1)
        ]
        Promise.all(imagePromises).then(heroImages => {
            setHeroes([...heroes, ...heroImages])
        }).catch(results => {
            console.log(results);
        });
    }, []);


    return (
        <React.Fragment>
            <div style={styles.container}>
                {heroes.map(item => <img src={item} style={styles.image} alt="picture" />)}
            </div>

        </React.Fragment>
    )
}
export default Footer;



