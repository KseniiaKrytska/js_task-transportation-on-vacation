'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  switch(true) {
    case days < 3:
      return days*40;

    case days < 7:
      return (days*40) - 20;

    default:  
      return (days*40) - 50;
  }


}

module.exports = calculateRentalCost;
