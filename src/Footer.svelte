<footer class="footer">
    <div class="socials">
        <a href="https://www.youtube.com/@linosteffen" target="_blank"><i class="fab fa-youtube"></i></a>
        <a href="https://www.instagram.com/lino.steffen/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://ch.linkedin.com/in/lino-steffen-2937631bb" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://www.tiktok.com/@lino.steffen" target="_blank"><i class="fab fa-tiktok"></i></a>
        <a href="https://www.facebook.com/lino.steffen.33" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="https://github.com/LinoSteffen" target="_blank"><i class="fab fa-github"></i></a>
    </div>
    <div class="links">
        <a href="">Home</a>
        <a href="#">About</a>
        <a href="#">Impressum</a>
    </div>
    <p class="copyright">Lino Steffen © 2023</p>
</footer>

<style>
    .footer {
        z-index: 8;
        position: relative;
        min-height: 20vh;
        bottom: 0;
        width: 100%;
        background-color: #16181a;
        color:white;
    }

    .footer .socials {
        padding-top: 20px;
        padding-bottom: 45px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .footer .socials > a {
        font-size:24px;
        width:40px;
        height:40px;
        line-height:42px;
        display:inline-block;
        text-align:center;
        border-radius: 12px;
        border: 1px solid;
        color:inherit;
        opacity:0.7;
        transition: all ease 0.5s;
    }

    .footer .socials > a:hover {
        opacity:1;
        border-radius: 20px;
    }

    .footer .links {
        padding: 0;
        list-style:none;
        text-align:center;
        font-size:18px;
        line-height:1.6;
        margin-bottom:20px;
    }

    .footer .links > a {
        padding:0 10px;
    }

    .footer .links > a {
        color:inherit;
        text-decoration:none;
        opacity:0.7;
        transition: all ease 0.5s;
    }

    .footer .links > a:hover {
        opacity:1;
    }

    .footer .copyright {
        margin: 0;
        text-align:center;
        font-size:13px;
        color:#aaa;
        padding-bottom: 10px;
    }
</style>