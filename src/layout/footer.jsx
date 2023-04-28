function Footer() {
    return <footer className="page-footer
    blue darken-1">
        <div className="footer-copyrigth">
            <div className="container">
                © {new Date().getFullYear()}
                , Разработала компания SkyFlex, <b>Алексей</b>
                <a className="grey-text
                text-lighten-4 right"
                href="#!">Правообладателям</a>
            </div>
        </div>
    </footer>
}
export { Footer };
