# Fruit Inventory Management App

## Getting Started

To start the mobile app, run the following command in your terminal:

```
npm start
```

## Login Page
This is the initial page of the app, where users can sign in to access their fruit inventory management application.

## Credentials
- Username: "A"
- Password: "B"

## Home Page
The home page connects to the Inventory page and Finances page. Click the "Inventory" button to navigate there initially.

## Inventory Page
Displays the list of fruits currently in the system.

Add: Opens the Add page to input new fruits.
Remove: Removes the latest entered fruit (dequeues the last fruit in the list).
Home: Navigates back to the home screen, sending information needed for the Finances screen.
Add Page
An easy way for users to input fruits from a selection of 9 fruits. Users can select a fruit and enter the price and quantity.

### Example
- Selected: Pineapple
- Price: 4.99
- Quantity: 3

The fruit will be added to the list. Navigate back to the home page afterward.

## Finances Page
Displays the total fruit value and the total amount of fruits from the Inventory page.

Save Button
Click on the "Save" button to save the finances.

## Save Page
A simple page displaying that the finances were saved, then navigates back to the login screen.