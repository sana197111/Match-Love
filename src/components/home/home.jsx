import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../home/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCopy,
    faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Home = () => {
    const url = window.location.href; // url 복사
    const copyAlert = () => {
        alert('링크 생성!');
    };
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <img
                            className={styles.logo}
                            src="img/FelizLogo.png"
                            alt="로고"
                        />
                    </div>
                    <div className={styles.middle}>
                        <h2 className={styles.header}>나의 연애 가치관 테스트</h2>
                        <p>나의 연애 가치관 유형과</p>
                        <p>나와 가장 잘 어울리는 사람은?</p>
                    </div>
                    <div className={styles.bottom}>
                        <Link to="/matchMBTI" className={styles.start__button}>
                            테스트 하기
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                        <CopyToClipboard text={url}>
                            <button
                                className={styles.start__button}
                                onClick={copyAlert}
                            >
                                링크복사
                                <FontAwesomeIcon
                                    icon={faCopy}
                                    className={styles.icon}
                                />
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
