import React from "react";

type Contact = {
  title: string;
  email?: string;
  phone?: string;
  addressLines?: string[];
};

const contacts: Contact[] = [
  {
    title: "Support",
    email: "support@example.com",
    phone: "+1 (555) 123-4567",
  },
  {
    title: "Sales",
    email: "sales@example.com",
    phone: "+1 (555) 987-6543",
  },
  {
    title: "Office",
    addressLines: ["123 Demo Street", "Sampleville, SP 00000"],
  },
];

const Contacts: React.FC = () => {
  return (
    <section>
      <h1>Contacts</h1>
      <p>
        These are temporary contacts for demonstration purposes. Replace them
        with your real details later.
      </p>

      <div className="contacts-grid">
        {contacts.map((contact) => (
          <div className="contact-card" key={contact.title}>
            <h2>{contact.title}</h2>
            {contact.email && <p>Email: {contact.email}</p>}
            {contact.phone && <p>Phone: {contact.phone}</p>}
            {contact.addressLines?.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
