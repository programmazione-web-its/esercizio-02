const squirrelHealthBar = document.getElementById('squirrel-health')
const playerHealthBar = document.getElementById('player-health')
const bonusLifeEl = document.getElementById('bonus-life')

const attackBtn = document.getElementById('attack-btn')
const strongAttackBtn = document.getElementById('strong-attack-btn')
const healBtn = document.getElementById('heal-btn')
const logBtn = document.getElementById('log-btn')

function adjustHealthBars(maxLife) {
  squirrelHealthBar.max = maxLife
  squirrelHealthBar.value = maxLife
  playerHealthBar.max = maxLife
  playerHealthBar.value = maxLife
}

function dealSquirrelDamage(damage) {
  const dealtDamage = Math.random() * damage
  squirrelHealthBar.value = +squirrelHealthBar.value - dealtDamage
  return dealtDamage
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage
  playerHealthBar.value = +playerHealthBar.value - dealtDamage
  return dealtDamage
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue
}

function resetGame(value) {
  playerHealthBar.value = value
  squirrelHealthBar.value = value
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl)
}

function setPlayerHealth(health) {
  playerHealthBar.value = health
}
