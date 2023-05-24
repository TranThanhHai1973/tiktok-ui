import Header from '~/Componments/Layout/components/Header';
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div>
                <div className="container">
                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;
