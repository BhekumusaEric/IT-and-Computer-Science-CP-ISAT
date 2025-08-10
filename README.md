Web Application Overview: QuickMark Spaza Online Shop
🛒 Purpose:
The QuickMark Spaza Web App is a simple, user-friendly online platform where customers can browse, search, and purchase grocery products typically sold at a spaza shop. The app also allows shop owners to manage stock and record sales.

🧩 Features & Pages Breakdown
1. Homepage (Landing Page)
🔹 Purpose:
Welcomes users.

Shows featured products or specials.

Provides navigation to other pages.

📌 Elements:
Logo and shop name

Welcome message (“Welcome to QuickMark Spaza!”)

Navigation bar (Home, Products, Contact, Cart)

Banner with promotional image or message

Featured products (3–4 items with images and prices)

2. Products Page (Main Business Page)
🔹 Purpose:
Display all grocery items available for sale.

Allow customers to select quantities and add items to a shopping cart.

📌 Elements:
Grid of product cards (image, name, price, “Add to Cart” button)

Categories or filters (e.g., Beverages, Snacks, Toiletries)

Search bar to find items quickly

Pagination or scroll to browse more products

Example Products:
Maize meal, bread, milk, cool drinks, eggs, soap, airtime, etc.

3. Cart Page (Optional 3rd Page Option)
🔹 Purpose:
Review selected items before checkout.

Show total cost.

Let user remove or update quantities.

📌 Elements:
Table or list of selected products (name, price, quantity, subtotal)

Total cost calculator (done in JavaScript)

“Checkout” and “Clear Cart” buttons

OR – Admin/Owner Page (Alternative 3rd Page Option)
🔹 Purpose:
Allow the shop owner to manage stock and view daily sales.

📌 Elements:
Add product form (name, price, quantity, image upload)

Stock list with edit/delete options

View sales history (simple table)

JavaScript validation for empty fields

4. Contact Page (Optional extra)
🔹 Purpose:
Let users contact the shop or ask for delivery.

📌 Elements:
Contact form (Name, Email, Message)

Map or address of the spaza shop

Shop contact number

🖼️ Wireframe Requirements (Subtask 1)
Create a storyboard with:

At least 3 wireframes (Home, Product Page, and Cart/Admin Page)

Use tools like diagrams.net (Draw.io), Figma, or paper sketches

Show where buttons, images, forms, and sections will go

💻 Front-End Requirements (Subtask 2)
Use HTML and CSS to build the 3 main pages.

Pages should include:

Header, footer, and clear layout

At least 4 graphic components (e.g., images of products)

A form (Add to cart, or product management form)

Page sections: header, left pane (categories), main pane (products), right pane (cart/summary)

⚙️ JavaScript Functionality (Subtask 3)
Add interactive features like:

“Add to cart” buttons that update the cart

Form validation (check if all fields are filled)

Calculate total cost in the cart

Show/hide sections based on actions (e.g., toggle product detail)

📝 Example Use Case Flow
User visits Homepage and sees product highlights.

They go to the Products Page, search for "milk", and add 2L to cart.

They click Cart, review items, and check total cost.

(Optional) The shop owner logs into the Admin Page to add new items or check daily sales.

🧠 Tips for You
Use W3Schools to copy base HTML/CSS layouts.

Keep your design simple but functional.

Use local product names and prices to make it realistic.

Take screenshots of all pages as evidence for submission.

Include comments in all your HTML/CSS/JS files explaining what each part does.

Would you like:

A sample wireframe?

Starter HTML/CSS templates?

JavaScript code examples for add-to-cart or form validation?

Let me know and I can build them step-by-step with you.









Ask ChatGPT
You said:
how can I simplyfy it a bit - it shouldnt really sell these products but may actually be like a website for the shop and may about the shop


ChatGPT said:
Perfect — thanks for the clarification!

If the goal isn't to sell products online, but instead to create an informative website about the shop, then we can simplify the project to just present what the shop is, what it offers, and how people can get in touch. That will also make your storyboard, HTML/CSS, and JavaScript much easier to manage for the ISAT.

✅ Simplified Web Application Overview: QuickMark Spaza Shop
🎯 Purpose:
This website is designed to introduce and promote the QuickMark Spaza Shop. It provides basic information such as shop location, business hours, what kinds of products are sold, and how to contact the shop owner. It is not an e-commerce site — it's just for informational and promotional use.

🧩 Simplified Pages Breakdown
1. Homepage
🔹 Purpose:
Welcome visitors and explain what QuickMark is.

✅ Include:
Shop name and logo

Welcome message (“Welcome to QuickMark Spaza!”)

A short paragraph about the shop: “We are a locally-owned spaza shop in Soweto, providing affordable everyday groceries to the community.”

Photo of the shop or items on shelves

Navigation bar (Home | About | Products | Contact)

2. About Page
🔹 Purpose:
Provide background on the business and owner.

✅ Include:
When and why the shop was started

The shop’s goals or mission (e.g. “Serving the community with low-cost essential goods.”)

A photo of the owner or team (optional)

Short list of achievements (e.g. “Operating since 2018”, “Trusted by 200+ customers daily”)

3. Products Page
🔹 Purpose:
Show categories of items sold — not for online purchase, just to inform visitors.

✅ Include:
Sections like:

Groceries (e.g. Maize meal, sugar, rice)

Drinks (e.g. Coke, Oros, water)

Toiletries (e.g. soap, toothpaste)

Each item could be displayed with:

Image

Name

Price (optional)

You can use HTML tables or image grids

4. Contact Page
🔹 Purpose:
Let customers know how to find or call the shop.

✅ Include:
Address of the spaza shop

Operating hours

Contact number

Simple contact form (Name, Email, Message)

Map image or embedded Google Map (optional)

✏️ Subtask Connections
Subtask	What You’ll Do
Subtask 1 (Storyboard)	Create wireframes for 3+ pages (Home, About, Products, Contact). Use Draw.io, Figma, or hand sketch. Show where things like text, images, buttons, and forms go.
Subtask 2 (HTML/CSS)	Build the actual pages. Use headings, text, images, nav bars, and a form. Include at least 4 images (e.g. product photos or shop logo). Use simple but clear layout with header/footer.
Subtask 3 (JavaScript)	Add one or two simple interactive features: <ul><li>Form validation (check if Name/Message is filled)</li><li>Image slideshow or hide/show product info on click</li></ul>

🧠 Example Simple JavaScript Feature
html
Copy
Edit
<script>
function validateForm() {
  let name = document.getElementById("name").value;
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }
  return true;
}
</script>
📌 Summary for Your Project
QuickMark Spaza Website will:

Welcome users and describe the shop

Show what kinds of items are available (just for info, not for sale)

Share contact details and location

Be simple, clear, and professional
