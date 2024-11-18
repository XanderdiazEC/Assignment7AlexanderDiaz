// Contact List Management System

// Initialize contact list with objects
const contacts = [
    {
        name: "John Doe",
        phone: "1234 567 890",
        email: "john.doe@example.com"
    },
    {
        name: "Jane Smith",
        phone: "2345 678 901",
        email: "jane.smith@example.com"
    },
    {
        name: "Bob Johnson",
        phone: "3456 789 012",
        email: "bob.johnson@example.com"
    }
];

// Function to display all contacts
function displayContacts() {
    console.log("\nAll Contacts:");
    console.log("-------------");
    contacts.forEach((contact, index) => {
        console.log(`Contact ${index + 1}:`);
        console.log(`Name: ${contact.name}`);
        console.log(`Phone: ${contact.phone}`);
        console.log(`Email: ${contact.email}`);
        console.log("-------------");
    });
}

// Function to add a new contact
function addNewContact() {
    const newContact = {
        name: "Maisie Haley",
        phone: "0913 531 3030",
        email: "risus.Quisque@urna.ca"
    };
    
    contacts.push(newContact);
    console.log("\nNew contact added:");
    console.log(`Name: ${newContact.name}`);
    console.log(`Phone: ${newContact.phone}`);
    console.log(`Email: ${newContact.email}`);
    
    // Display updated list
    displayContacts();
}

// Function to show first and last contacts
function showFirstAndLast() {
    console.log("\nFirst and Last Contacts:");
    console.log("-------------");
    console.log("First Contact:");
    console.log(`Name: ${contacts[0].name}`);
    console.log(`Phone: ${contacts[0].phone}`);
    console.log(`Email: ${contacts[0].email}`);
    console.log("-------------");
    
    const last = contacts[contacts.length - 1];
    console.log("Last Contact:");
    console.log(`Name: ${last.name}`);
    console.log(`Phone: ${last.phone}`);
    console.log(`Email: ${last.email}`);
    console.log("-------------");
}

// Display initial contact list when page loads
window.addEventListener('DOMContentLoaded', () => {
    console.log("Initial Contact List:");
    displayContacts();
});