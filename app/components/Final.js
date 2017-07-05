import React, { Component, PropTypes } from "react";
import styles from "./Final.css";
import Avatar from "react-avatar";
import { Link } from "react-router";
import { Button, ProgressBar, Intent, Switch } from "@blueprintjs/core";
import img_porta from "../imgs/or.gif";
import { board } from "../utils/arduino";

export default class Final extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      score: props.match.params.score,
      n_score: parseInt(props.match.params.score,10),
      max_score : 1000,
      acertos: 0
    };
    
    this.state.acertos = this.state.n_score / 100;
  }

  render() {
    return (
      <div className={styles.conteext}>
        <nav className="pt-navbar .modifier">
          <div className="pt-navbar-group pt-align-left">
            <div className={"pt-navbar-heading " + styles.toptitle}>
              Fim
            </div>
            <ProgressBar
              value="1.00"
              intent={Intent.PRIMARY}
              className={"pt-no-stripes " + styles.topprog}
            />
            
            <div className={styles.toptext}>Score: {this.state.score}</div>
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
              <div className={styles.finalcenter}>
                <h1>Parabéns!</h1>
                <h3>Você concluiu os ensinamentos.</h3>
                <h4>Teve um aproveitamento de {(this.state.score / this.state.max_score)*100}%</h4>
                <h4>Acertou {this.state.acertos} de {this.state.max_score / 100}</h4>
                <Button text="Finalizar" className="pt-large  pt-icon-tick" onClick={() => console.log(this.props.history.push("/"))} />
              </div> 
          </div>
        </div>
      </div>
    </div>
    );
  }
}
