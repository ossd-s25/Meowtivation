<p align="center">
    <img src="https://github.com/ossd-s25/Meowtivation/blob/d2aecd3628c686cbd4d5eaef45ec0919a965f5ea/logos/Meowtivation.png" width="300px">
</p>
<h3 align="center">Meowtivation – A Purr-fect Study Companion!</h3>

Meowtivation is an open-source MIT-licensed browser extension designed to provide motivation to students studying by allowing them to simply click on the extension and be greeted with an inspiration cat gif.

## Installation

Follow this simple guide to get the extension set up:

#### (1) Download the code

Clone our repository to your computer:
```bash
$git clone https://github.com/ossd-s25/Meowtivation.git
```

#### (2) Set up the API key

Due to the open-source nature of our project, we can't offer a single API key for all of our users :(.
Therefore, we need you to spend a minute to make your own API key to Giphy (our cat GIF database).

Here's how you do it:

First, go to the [Giphy developer site](https://developers.giphy.com) and create an account.

Once you have an account, go to the [Giphy dashbaord](https://developers.giphy.com/dashboard/) and click "Create an API Key"

<img src="https://github.com/ossd-s25/Meowtivation/blob/47968628b14dc2b867381092d86db258f66483d0/documentation/giphy_dashboard.jpg" width="200px">

Then, select "SDK" and click "Next Step":

<img src="https://github.com/ossd-s25/Meowtivation/blob/47968628b14dc2b867381092d86db258f66483d0/documentation/giphy_select_sdk.jpg" width="200px">

Next, enter some information about the app. Here is an example of the type of information to add:

<img src="https://github.com/ossd-s25/Meowtivation/blob/47968628b14dc2b867381092d86db258f66483d0/documentation/giphy_api_key_settings.jpg" width="200px">

Now you should have an API key! Please copy it, and paste it into the `apiKey` variable in `popup.js` right [here](https://github.com/ossd-s25/Meowtivation/blob/47968628b14dc2b867381092d86db258f66483d0/src/popup.js#L1C16-L1C18)





#### (3) Load the extension

Now we need to load the extension into Chrome!

First, go to the "Manage Extensions" section in Chrome. Once there, make sure that "Developer Mode" is turned on. You'll
find the "Developer Mode" button on the top-right of the page. Once you are in the developer mode, go to the top left of
the page and click "Load Unpacked extension". Then, select the `src` folder in this repository and load it.

And that's it! You're all set to study with a motivational cat. Feel free to pin the extension for the best experience.

## How to Contribute

Contributions are welcome! If you have a suggestion or an issue, please use the issue tracker to let me know.

Read more about contributing to Meowtivation in [CONTRIBUTING.md](https://github.com/ossd-s25/Meowtivation/CONTRIBUTING.md).

## License

`Meowtivation` is licensed under the [MIT License](/LICENSE).

## Contributors
- [Lulu Zhu](https://github.com/LuluZhuu)
- [Jacob Padilla](https://github.com/jpjacobpadilla)
- [Brizen Britt](https://github.com/briz123)


