
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('the draw button displays the div with id of "choices"', async () => {
    const draw = await driver.findElement(By.id('draw')).click()
    const displays = await driver.findElement(By.id('choices')).isDisplayed()
    expect(displays).toBe(true)
})

test('the "add to duo" button displays the div with the id = "player-duo"', async ()=>{
    await driver.findElement(By.id('draw')).click()
    
    const addToDuo = await driver.findElement(By.className('bot-btn')).click()

    const displays = await driver.findElement(By.id('player-duo')).isDisplayed()
    expect(displays).toBe(true)
})