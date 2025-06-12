# EmailJS Setup Instructions for Lux Limousine

This document provides step-by-step instructions to configure EmailJS for professional email handling of contact forms and booking requests.

## 1. EmailJS Account Setup

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Add your email service (Gmail, Outlook, etc.)
3. Create two email templates as described below
4. Get your Service ID and Public Key from the dashboard

## 2. Environment Variables

Create a `.env.local` file in your project root with these variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id_here
NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID=your_booking_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 3. Email Templates

### Contact Form Template (template_contact)

**Subject:** `{{subject}}`

**Email Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #D4AF37; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .footer { background-color: #121212; color: white; padding: 15px; text-align: center; font-size: 12px; }
        .info-box { background-color: white; padding: 15px; margin: 15px 0; border-left: 4px solid #D4AF37; }
        .urgent { color: #e74c3c; font-weight: bold; }
    </style>
</head>
<body>
    <div class="header">
        <h1>{{business_name}} - New Contact Inquiry</h1>
    </div>
    
    <div class="content">
        <div class="info-box">
            <h3>📞 Customer Information</h3>
            <p><strong>Name:</strong> {{customer_name}}</p>
            <p><strong>Email:</strong> {{customer_email}}</p>
            <p><strong>Phone:</strong> {{customer_phone}}</p>
            <p><strong>Inquiry Type:</strong> {{inquiry_type}}</p>
            <p><strong>Submitted:</strong> {{submission_date}}</p>
        </div>
        
        <div class="info-box">
            <h3>💬 Customer Message</h3>
            <p>{{message}}</p>
        </div>
        
        <div class="info-box">
            <h3>📋 Follow-up Instructions</h3>
            <pre>{{follow_up_instructions}}</pre>
        </div>
    </div>
    
    <div class="footer">
        <p>{{email_footer}}</p>
        <p>Visit: {{website}} | Email: info@luxlimoservice.ca | Phone: (403) 605-8133</p>
    </div>
</body>
</html>
```

### Booking Form Template (template_booking)

**Subject:** `{{subject}}`

**Email Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #D4AF37; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .footer { background-color: #121212; color: white; padding: 15px; text-align: center; font-size: 12px; }
        .info-box { background-color: white; padding: 15px; margin: 15px 0; border-left: 4px solid #D4AF37; }
        .urgent { color: #e74c3c; font-weight: bold; background-color: #ffeaa7; padding: 10px; border-radius: 5px; }
        .booking-summary { background-color: #2d3436; color: white; padding: 15px; font-family: monospace; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚗 {{business_name}} - New Booking Request</h1>
        <p class="urgent">Priority Level: {{booking_urgency}}</p>
    </div>
    
    <div class="content">
        <div class="info-box">
            <h3>📞 Customer Information</h3>
            <p><strong>Name:</strong> {{customer_name}}</p>
            <p><strong>Email:</strong> {{customer_email}}</p>
            <p><strong>Phone:</strong> {{customer_phone}}</p>
            <p><strong>Submitted:</strong> {{submission_date}}</p>
        </div>
        
        <div class="info-box">
            <h3>🚗 Service Details</h3>
            <p><strong>Service Date:</strong> {{service_date}}</p>
            <p><strong>Service Time:</strong> {{service_time}}</p>
            <p><strong>Pickup Location:</strong> {{pickup_location}}</p>
            <p><strong>Dropoff Location:</strong> {{dropoff_location}}</p>
            <p><strong>Number of Passengers:</strong> {{passenger_count}}</p>
            <p><strong>Vehicle Type:</strong> {{vehicle_type}}</p>
            <p><strong>Special Requests:</strong> {{special_requests}}</p>
        </div>
        
        <div class="booking-summary">
            {{booking_summary}}
        </div>
        
        <div class="info-box urgent">
            <h3>🔔 Action Required</h3>
            <pre>{{follow_up_instructions}}</pre>
        </div>
    </div>
    
    <div class="footer">
        <p>{{email_footer}}</p>
        <p>Visit: {{website}} | Email: info@luxlimoservice.ca | Phone: (403) 605-8133</p>
    </div>
</body>
</html>
```

## 4. EmailJS Dashboard Configuration

1. **Service Setup:**
   - Go to Email Services → Add New Service
   - Choose your email provider (Gmail recommended)
   - Configure with `info@luxlimoservice.ca`

2. **Template Setup:**
   - Create two templates using the HTML above
   - Set template IDs as `template_contact` and `template_booking`
   - Test templates with sample data

3. **Security:**
   - Go to Account → API Keys
   - Copy your Public Key
   - Add domain restrictions for security

## 5. Testing

After setup:
1. Test both contact and booking forms
2. Check that emails arrive at `info@luxlimoservice.ca`
3. Verify email formatting and all variables populate correctly
4. Test error handling by temporarily using invalid credentials

## 6. Email Features

### Professional Formatting:
- ✅ HTML email templates with company branding
- ✅ Structured information layout
- ✅ Clear action items and follow-up instructions
- ✅ Customer contact details prominently displayed
- ✅ Booking urgency indicators
- ✅ Professional styling with company colors

### Booking Emails Include:
- 🚗 Complete service details
- 📅 Formatted date and time
- 📍 Pickup and dropoff locations
- 👥 Passenger count and vehicle type
- 💬 Special requests
- 🔔 Urgent action items
- 📞 Customer contact information

### Contact Emails Include:
- 📞 Customer information
- 💬 Full message content
- 📋 Follow-up instructions
- ⏰ Submission timestamp

## 7. Troubleshooting

**Common Issues:**
- **Emails not sending:** Check EmailJS service configuration and API limits
- **Variables not populating:** Verify template variable names match code
- **Emails going to spam:** Set up proper domain authentication in EmailJS
- **Error handling:** Check browser console for specific error messages

**Support:**
- EmailJS Documentation: https://www.emailjs.com/docs/
- Template Testing: Use EmailJS dashboard test feature
- Rate Limits: Free plan allows 200 emails/month

This setup ensures all booking and contact inquiries are professionally formatted and sent directly to `info@luxlimoservice.ca` with all necessary information for prompt follow-up. 