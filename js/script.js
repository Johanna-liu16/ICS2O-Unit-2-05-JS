// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const hours = parseInt(document.getElementById('hours-worked').value)
  const rate = parseInt(document.getElementById('hourly-rate').value)

  // process
  const tax = ( hours * rate ) * 0.18
  const pay = ( hours * rate ) * ( 1.00 - 0.18 )

  // output
  document.getElementById('income').innerHTML = 'Your pay will be: ' + '$' + pay.toFixed(2) 
  document.getElementById('government').innerHTML = 'The government will take: ' + '$' + tax.toFixed(2) 
}
