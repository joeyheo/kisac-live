import React from 'react';
import { Link } from "react-router-dom";
import { Button, Container, Table } from "semantic-ui-react";

export default function ReturnToPreviousPage() {

    if (document.referrer === 'http://localhost:3000/badminton') {
        return (
            <div class="backtoschedules backBtnContainer">
                <Link to='/badminton'>
                    <button class="ui grey basic button">
                    <i class="left chevron icon"></i>
                    Badminton
                    </button>
                </Link>
            </div>
        );
      }

    if (document.referrer === 'http://localhost:3000/baseball') {
        return (
            <div class="backtoschedules backBtnContainer">
                <Link to='/baseball'>
                    <button class="ui grey basic button">
                    <i class="left chevron icon"></i>
                    Baseball
                    </button>
                </Link>
            </div>
        );
      }

    if (document.referrer === 'http://localhost:3000/basketball') {
        return (
            <div class="backtoschedules backBtnContainer">
                <Link to='/basketball'>
                    <button class="ui grey basic button">
                    <i class="left chevron icon"></i>
                    Basketball
                    </button>
                </Link>
            </div>
        );
      }   
      
    if (document.referrer === 'http://localhost:3000/soccer') {
        return (
            <div class="backtoschedules backBtnContainer">
                <Link to='/soccer'>
                    <button class="ui grey basic button">
                    <i class="left chevron icon"></i>
                    Soccer
                    </button>
                </Link>
            </div>
        );
      } 

    if (document.referrer === 'http://localhost:3000/swimming') {
        return (
            <div class="backtoschedules backBtnContainer">
                <Link to='/swimming'>
                    <button class="ui grey basic button">
                    <i class="left chevron icon"></i>
                    Swimming
                    </button>
                </Link>
            </div>
        );
      }

    if (document.referrer === 'http://localhost:3000/tabletennis') {
        return (
            <div class="backtoschedules backBtnContainer">
                <Link to='/tabletennis'>
                    <button class="ui grey basic button">
                    <i class="left chevron icon"></i>
                    Table Tennis
                    </button>
                </Link>
            </div>
        );
      }

    if (document.referrer === 'http://localhost:3000/tennis') {
        return (
            <div class="backtoschedules backBtnContainer">
                <Link to='/tennis'>
                    <button class="ui grey basic button">
                    <i class="left chevron icon"></i>
                    Tennis
                    </button>
                </Link>
            </div>
        );
      }

    if (document.referrer === 'http://localhost:3000/volleyball') {
        return (
            <div class="backtoschedules backBtnContainer">
                <Link to='/volleyball'>
                    <button class="ui grey basic button">
                    <i class="left chevron icon"></i>
                    Volleyball
                    </button>
                </Link>
            </div>
        );
      }
}