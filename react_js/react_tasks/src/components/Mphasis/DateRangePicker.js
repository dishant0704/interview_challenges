import React, { useState, useEffect, Fragment, useContext } from "react";
import './DateRangePicker.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CalendarProvider } from './CalendarContexts';

import FormInput from "./FormInput";
import DisplayData from "./DisplayData";

//Client Video Interview - Ketan Sawant - React Developer
//Dated on Thursday, 30 March⋅18:30 – 19:00 

const DateRangePicker = () => {
  
    return (
        <CalendarProvider >
        <Fragment>
            <div className="container text-center datRangPikWrapper">
                <div className="panel panel-default panelDefault col-12 col-sm-8">
                    <div className="panel-heading panelHeading col-12">Date Range Picker</div>
                    <div className="panel-body panelBody col-12">
                        <div className="row">
                            <FormInput name="fromInput" label="From: " pickerFlag = {true} />
                            <FormInput name="toInput" label="To: " pickerFlag = {true} defaultFlag={false}/>
                        </div>
                        <div className="row">
                           <DisplayData />
                        </div>
                    </div>
                    <div className="panel-footer panelFooter col-12">
                        <p>
                            <span>Ketan Sawant</span><br />
                            React Developer,<br />
                            <a href="mailTo:ketandutt@gmail.com" target="_blank">ketandutt@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
        </CalendarProvider>
    )
}

export default DateRangePicker;