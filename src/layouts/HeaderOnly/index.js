import Header from '~/layouts/components/Header';
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
