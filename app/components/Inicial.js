import React, { Component, PropTypes } from "react";
import styles from "./Inicial.css";
import Avatar from "react-avatar";
import { Button, ProgressBar, Intent } from "@blueprintjs/core";
import img_perfil from '../imgs/perfil.jpg';
import { push } from 'react-router-redux';

export default class Inicial extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={"pt-card .pt-elevation-4 " + styles.card}>
          <div className={styles.avatar}>
            <Avatar
              src={img_perfil}
              round="true"
              size="250"
            />
          </div>
          <div className={styles.avatarname}>
            <p>Bem vindo, Aluno!</p>
          </div>
          <div>
            {/*<ProgressBar
              value="0.01"
              intent={Intent.PRIMARY}
              className="pt-no-stripes"
            />*/}
            {/*<div className={styles.progdiv}>0/5</div>*/}
          </div>
          <div className={styles.butdiv}>
            <Button
              text="Iniciar"
              className="pt-large pt-fill pt-icon-play"
              onClick={() => this.props.dispatch(push("/level"))}
            />
          </div>
          <div className={styles.butdiv}>

            <Button
              text="Sair"
              className="pt-large pt-fill pt-icon-repeat"
              onClick={() => { }}
            />
          </div>
        </div>
      </div>
    );
  }
}
