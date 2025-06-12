import './Panel.css';

function Panel() {
    return (
        <div className="panel__container">
            <div className="panel__top-element">
                <img src="/House.svg" alt="house" width={16} height={16}/>
                <span className="sidebar-text">Панель иснтрументов</span>
            </div>
            <div className="panel__grid-wrapper">
                <div className="block block1">
                    <span>КОЛ-ВО СОТРУДНИКОВ</span>
                    <div className="statistics">
                        <img src="/Users.svg" alt="users" width={18} height={15}/>
                        <span className="sum">125</span>
                        <span className="atribute">сотрудников</span>
                    </div>
                </div>
                <div className="block block2">
                    <span>ОБЩИЕ РАСХОДЫ</span>
                    <div className="statistics">
                        <img src="/Vector.svg" alt="users" width={12.73} height={12.73}/>
                        <span className="sum">100</span>
                        <span className="atribute">млн</span>
                    </div>
                </div>
                <div className="block block3">
                    <span>КОЛ-ВО МАШИН В АВТОПАРКЕ</span>
                    <div className="statistics">
                        <img src="/Cars.svg" alt="users" width={18} height={15}/>
                        <span className="sum">125</span>
                        <span className="atribute">штук</span>
                    </div>
                </div>
                <div className="block-photo block4">
                    <img src="/Block.svg" alt="block" height={340} width={688}/>
                </div>
                <div className="block-photo block5">
                    <img src="/chart 1.svg" alt="img"/>
                </div>
                <div className="block block6">{}</div>
            </div>
        </div>
    );
}

export default Panel;
