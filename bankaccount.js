var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },

  message : function printAccountSummary(){
    console.log("Welcome!\nYour balance is currently " +this.balance +" and your interest rate is " + this.interestRatePercent + "%");
  }
};
