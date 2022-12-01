const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I open home page', async () => {
    await browser.url(`https://www.newegg.com`);
    browser.refresh();
});


When('I enter {word} in search bar', async (item) => {
    const input = await $('//input[@type="search"]');
    await input.setValue(item);
    const button = await $('//button[@class="ico ico-search"]');
    await button.click();

});

Then('I see at least one item appear', async () => {
   const listItems = await $$('div.list-wrap');
   await expect(listItems.length >= 1);
});

When('I open {string} tab', async (page) => {
    const span = await $('div.swiper-slide.swiper-slide-active');
    await span.click();
    const logo = await $('a.header2021-logo-img');
    await logo.click();

});

Then('I check if I go to the main page', async () => {
    await expect (`https://www.newegg.com`);
   
    
});
