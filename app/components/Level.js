import React, { Component, PropTypes } from "react";
import styles from "./Level.css";
import Avatar from "react-avatar";
import { Link } from "react-router";
import { Button, ProgressBar, Intent, Switch } from "@blueprintjs/core";
import img_porta from "../imgs/inv.gif";
import { board } from "../utils/arduino";

export default class Level extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sw1: false,
      sw2: false,
      sw3: false
    };

    this._handleS1 = this._handleS1.bind(this);
    this._handleS2 = this._handleS2.bind(this);
    this._handleS3 = this._handleS3.bind(this);
    this._handleSimulator = this._handleSimulator.bind(this);
    this._handleFinish = this._handleFinish.bind(this);
  }

  _handleS1() {
    console.log(this.state);
    this.state.sw1 = !this.state.sw1;
  }

  _handleS2() {
    console.log(this.state);
    this.state.sw2 = !this.state.sw2;
  }

  _handleS3() {
    console.log(this.state);
    this.state.sw3 = !this.state.sw3;
  }

  _handleSimulator() {
    let valor_a = this.state.sw1;
    board.emit("s_inv",valor_a);
    board.emit("display_msg", "Realizando Teste", "Porta Inversora.");
    
  }

  _handleFinish(){
    let score = 0;
    if (this.state.sw2) score += 100;
    if (!this.state.sw3) score += 100;
    
    this.props.history.push("/level2/"+ score)
  }

  render() {
    return (
      <div className={styles.conteext}>
        <nav className="pt-navbar .modifier">
          <div className="pt-navbar-group pt-align-left">
            <div className={"pt-navbar-heading " + styles.toptitle}>
              Level 1
            </div>
            <ProgressBar
              value="0.33"
              intent={Intent.PRIMARY}
              className={"pt-no-stripes " + styles.topprog}
            />
            
            <div className={styles.toptext}>1/3</div>
            <div className={styles.toptext}>Score: 0</div>
          </div>
          <div className="pt-navbar-group pt-align-right">
            <button
              className="pt-button pt-minimal pt-icon-home"
              onClick={() => console.log(this.props.history.push("/"))}
            >
              Inicio
            </button>
            <span className="pt-navbar-divider" />
            <button className="pt-button pt-minimal pt-icon-user" />
            <button className="pt-button pt-minimal pt-icon-notifications" />
            <button className="pt-button pt-minimal pt-icon-cog" />
          </div>
        </nav>
        <div className={styles.container}>
          <div className={"pt-card .pt-elevation-4 " + styles.card}>
            <div className={styles.inside}>
              <div className={styles.insider}>
                <div className={styles.insidert}>
                  <div>
                    <p>Porta Inversora</p>
                  </div>
                </div>
                <div className={styles.insiderm}>

                  <div><img src={img_porta} /></div>
                  <div className={styles.insidertext}>
                    <p>Valor de A: </p>
                    <Switch
                      className={styles.swtext}
                      onChange={this._handleS1}
                      inputRef={el => (this.sw1 = el)}
                    />
                  </div>
                </div>
                <div className={styles.insiderb}>
                  <Button
                    text="Simular no Arduino"
                    className="pt-large  pt-icon-play"
                    onClick={this._handleSimulator}
                  />
                </div>
              </div>
              <div className={styles.insidel}>
                <div className={styles.insidelt}><p>Tabela Verdade</p></div>
                <div className={styles.insidelm}>
                  <table className="pt-table pt-striped pt-bordered">
                    <thead>
                      <th>A</th>
                      <th>Y</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0</td>
                        <td><Switch onChange={this._handleS2} /></td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td><Switch onChange={this._handleS3} /></td>
                      </tr>
                    </tbody>
                  </table>

                </div>
                <div className={styles.insidelb}>
                  <Button text="Finalizar" className="pt-large  pt-icon-tick" onClick={this._handleFinish}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
