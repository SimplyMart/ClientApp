# Instructions

We have submitted an organization link consisting of 2 repositories:

- Client App

  - User login/signup.
  - Profile page.
  - QR Scan Page to scan QR code of the store visiting.
  - Visited stores display to select one on the home page.
  - Bar code scanner with selected store details opens to scan the bar code of items.
  - Scanned items will get added to the cart and will be displayed on the cart page with the quantity increment/decrement option and the total bill will be generated. Press the "Pay Now" button and the payment page will open, pay the bill and exit the store.

- Store Admin Panel
  - Admin login/signup.
  - Payments page to display all the payments that have been made.
  - Products page to display and update stock of products accordingly.
  - QR Page to display the QR code of the store.
  - Profile page.

**Note: The client app is an app for smartphones only. Please use it on a smartphone only.**

# Overview

SimplyMart is an application that provides its users easy self-service at shopping marts in a very simple way because it eliminates the long queues and reduces running costs for marts.

# Inspiration

Has it ever happened that you went to a mart for shopping and came out in less than 2-3 minutes? even if you will go to mart to buy just 1 thing even then you will have to wait for your turn and if you are lucky then you can get out in not less than 5 minutes. The inspiration for building this app comes from watching not just our family members but other people who are wasting their time in long lines. Some people work days and night and therefore they find it difficult to spend so much time just in the shopping mart. There are more than 163 million shoppers all over the world who spend 31 minutes on average being lined up in the queues that sum up to approximately 9,607 years in the shopping market only.

# What It Does?

Our motto behind this app is to `make offline shopping smart with simplyMart`. What it does is allows you to scan the barcode of the items present in the shopping mart and put them into your cart. The quantity of an item can be increased and decreased easily, the item can also be removed from the cart anytime. When you are done with the shopping and you are satisfied with your cart items, you can easily pay the amount generated on the app itself that's how instead of waiting in the long queues you can easily pay and leave just like that. Once the payment is completed, the mart admin will receive a notification and a transaction bill as well stating that the given user has bought the listed items successfully.

# How We Built It?

First of all, we planned out the idea, its detailed features and made a flowchart to prevent any kind of technical errors in the end. We did all of this on a sheet of paper listing the logic flows and how to make the system more optimized. At last, we came up with an implementation plan.

All four of us having experience in frontend (HTML, CSS, JavaScript, ReactJs) and backend(Firebase), we decided to assign equal amounts of frontend and backend work to each member. We divided the team into 2 pairs and one pair was tasked with building the store admin panel while the other one was tasked with building and organizing the main app.

# Challenges We Ran Into

Major challenges were using new libraries for scanning Store QR Codes and Item Barcodes. We used two different libraries namely react-qr-reader and QuaggaJS which track QRs and barcodes in real-time respectively. Another major challenge was handling multiple data at the same time. Another major challenge was sleep deprivation as we later realized that the app we're trying to build is not a simple one with basic features.

# Accomplishments That We Are Proud Of

Accomplishments we're proud of are successfully implementing the logic flow we had decided at the beginning of the hackathon and that too is upto our expectations. We're also proud of the web application that we were able to build with libraries which we had never heard of during the hackathon itself as we learned a lot while implementing them.

# What We Learned?

As already mentioned above, we learned a lot while implementing some libraries we have never used before. We majorly learned how to collaborate and manage time in these kinds of hackathons.

# Built With

- HTML
- CSS
- SASS
- ReactJs
- Firebase
- NextJs
- Netlify

# ScreenShots

## User login/Signup
<img src="https://user-images.githubusercontent.com/61985499/139577414-4cf97a40-3a91-4850-9d32-204419784c85.png" alt="drawing" style="width:300px;"/>
<!-- ![image](https://user-images.githubusercontent.com/61985499/139577414-4cf97a40-3a91-4850-9d32-204419784c85.png) -->

## Scan QR code (Scan the QR code of the store visiting)
<img src="https://user-images.githubusercontent.com/61985499/139577423-1d8aa4bf-30b9-4591-96a3-9ab7738ee15d.png" alt="drawing" style="width:300px;"/>
<!-- ![image](https://user-images.githubusercontent.com/61985499/139577423-1d8aa4bf-30b9-4591-96a3-9ab7738ee15d.png) -->

## Home Page(Visited Stores)
<img src="https://user-images.githubusercontent.com/61985499/139577438-8c2a77ae-d9ba-47e1-a8b6-d0e559f5a896.png" alt="drawing" style="width:300px;"/>
<!-- ![image](https://user-images.githubusercontent.com/61985499/139577438-8c2a77ae-d9ba-47e1-a8b6-d0e559f5a896.png) -->

## Store details and Bar Code (to scan bar codes of the items)
<img src="https://user-images.githubusercontent.com/61985499/139577456-2368259d-bf68-4438-91d2-e0dab8f82406.png" alt="drawing" style="width:300px;"/>
<!-- ![image](https://user-images.githubusercontent.com/61985499/139577456-2368259d-bf68-4438-91d2-e0dab8f82406.png) -->

<img src="https://user-images.githubusercontent.com/61985499/139577461-e6819915-9f3b-4352-b2fa-66b85a3d1ba4.png" alt="drawing" style="width:300px;"/>
<!-- ![image](https://user-images.githubusercontent.com/61985499/139577461-e6819915-9f3b-4352-b2fa-66b85a3d1ba4.png) -->

## Cart Page
<img src="https://user-images.githubusercontent.com/61985499/139577472-8e0f908b-8872-4fd7-a4a2-4dd4657724b4.png" alt="drawing" style="width:300px;"/>
<!-- ![image](https://user-images.githubusercontent.com/61985499/139577472-8e0f908b-8872-4fd7-a4a2-4dd4657724b4.png) -->

## Payment Page
<img src="https://user-images.githubusercontent.com/61985499/139577498-d9714a55-29b0-493c-a554-6ccd5b4242f5.png" alt="drawing" style="width:300px;"/>
<!-- ![image](https://user-images.githubusercontent.com/61985499/139577498-d9714a55-29b0-493c-a554-6ccd5b4242f5.png) -->

## Profile Page
<img src="https://user-images.githubusercontent.com/61985499/139577481-cc75900e-2b61-43d7-997b-0b937c797f32.png" alt="drawing" style="width:300px;"/>
<!-- ![image](https://user-images.githubusercontent.com/61985499/139577481-cc75900e-2b61-43d7-997b-0b937c797f32.png) -->


# FAQs

**Q. How do you plan to prevent theft which might take place?**
Ans. One of the easiest ways to prevent theft is randomized checkout control, which uses an algorithm to randomly select carts/baskets for control before they leave the mart.

If a customer’s cart is selected for a random check, the app prompts them to go to the designated area for a check. Their app is locked, making them unable to pay and leave the store before having their cart checked.

Available personnel is prompted to go and perform the security checking. The employee checks if the scanned items match the items in the cart. If there are just a few items in the cart, the employee can simply approve the cart without a lengthy process.

If there is a mismatch, the employee can add items the user forgot/did not scan. The customer is given a choice to either decline to proceed with the purchase, or accept the corrections made by the employee.

When the customer accepts the corrections, the updated cart is sent to the customer’s app, prices are recalculated, and the app is unlocked. The total price reflects the corrections made by the employee during the control, and potential theft or misunderstanding is avoided.

This way, your regular shoppers will understand that it is necessary to occasionally have checks to be able to offer frictionless checkout. On the other hand, shoplifters will be deterred if they know that there is a chance that their bags might be checked.

**Q. Why do you think your app is useful if services like Amazon deliver stuff and even groceries directly at your home?**
Ans. In a world where everything is becoming online, we have tried to come up with a middle way by mixing offline and online together. Reports say that 92% of people choose offline shopping over online shopping. People like to go out, check, and buy items for different reasons and we are providing them simplyMart so that they don't have to waste their time.

<img src="https://d33wubrfki0l68.cloudfront.net/e079abe345b743e6c6ead1099913dc55aabff31d/6fc0c/images/blog/posts/2014/08/blog-retail-purchase.jpg" />
