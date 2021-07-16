import React from 'react';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const Icons = () => {
    return (
        <div className="icons">
            <h1>почему с нами выгодно</h1>
            <div className="sections">
                <div className="first">
                    <BeachAccessIcon style={{fontSize:80}}/>
                    <h2>Страховка от ошибок бухгалтера</h2>
                    <p>Наша ответственность застрахована на 1.000.000 сом. Это <br/> означает, что даже если мы ошибемся, то страховая <br/> компания возместит вам ущерб.</p>
                </div>
                <div className="second">
                    <LocalLibraryIcon style={{fontSize:80}}/>
                    <h2>Вы покупаете наш опыт</h2>
                    <p>Мы ведем бухгалтерию в самых разных сферах и это <br/> позволяет нам находить лучшие решения для вас.</p>
                </div>
            </div>
            <div className="sections">
                <div className="first">
                    <PregnantWomanIcon style={{fontSize:80}}/>
                    <h2>Вы не зависите от одного человека</h2>
                    <p>Мы — команда и всегда можем подменить друг друга (если <br/> кто-то заболеет, уйдет в отпуск или не берет трубку).</p>
                </div>
                <div className="second">
                    <CloudUploadIcon style={{fontSize:80}}/>
                    <h2>Резервное копирование вашей 1С-базы</h2>
                    <p>Даже если все компьютеры в нашем офисе сгорят, ваш <br/> бухгалтерский учет от этого никак не пострадает.</p>
                </div>
            </div>
            <div className="sections">
                <div className="first">
                    <AccountBalanceIcon style={{fontSize:80}}/>
                    <h2>Экономия на отчислениях в Соцфонд</h2>
                    <p>Мы — самостоятельная организация и за нас не нужно <br/> платить соцотчисления как за штатного бухгалтера.</p>
                </div>
                <div className="second">
                    <MonetizationOnIcon style={{fontSize:80}}/>
                    <h2>Экономия на налогах</h2>
                    <p>Мы официально выдаем вам документы на оплату наших <br/> услуг. Это подтверждает ваши расходы и, соответственно, <br/> снижает ваш налог на прибыль.</p>
                </div>
            </div>
        </div>
    );
};

export default Icons;