import { useState } from "react";
import "./main.css";
import "./index.css";
import { Button } from "./stories/Button";

function Main() {
    const [mode, setMode] = useState(true);

    const onClickButton = () => {
        setMode(!mode);
    };
    const modeClassName = mode ? "dark-mode" : "light-mode";

    return (
        <div className="App">
            <div className={`background background-${modeClassName}`}>
                <button onClick={onClickButton}>Change mode</button>
                <div className="header">
                    <h1>
                        <a className="blue-500">Invest anything,</a>
                        <br />
                        <a className={`color-hightlight-${modeClassName}`}> All-at-One</a>
                    </h1>
                </div>
                <div className="container">
                    <div className={`circle circle-1-${modeClassName}`}></div>
                    <div className={`circle circle-2-${modeClassName}`}>
                        <div class={`icon icon-VIB-${modeClassName}`}></div>
                        <div class={`icon icon-TECH-${modeClassName}`}></div>
                    </div>
                    <div className={`circle circle-3-${modeClassName}`}>
                        <div class={`icon icon-VCB-${modeClassName}`}></div>
                    </div>
                    <div className={`circle circle-4-${modeClassName}`}>
                        <div class={`icon icon-TPB-${modeClassName}`}></div>
                        <div class={`icon icon-VP-${modeClassName}`}></div>
                    </div>

                    <div
                        className={`actions-${modeClassName} background-color-${modeClassName}"`}
                    >
                        <div className={`icon-search-${modeClassName}`}></div>
                        <input
                            typeof="text"
                            placeholder="Top cổ phiếu Ngân hàng"
                            className={`search-${modeClassName} color-primary-${modeClassName}`}
                        />
                    </div>
                    <div className="button grid grid-cols-2 gap-3">
                        <Button mode={!mode} label="Đăng ký" />
                        <Button mode={mode} label="Đăng nhập" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
