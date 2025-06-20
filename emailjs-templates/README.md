# EmailJS Templates for Lux Limousine

## Quick Setup Instructions

### Step 1: Go to EmailJS Dashboard

Visit: https://dashboard.emailjs.com/admin/templates

### Step 2: Create Booking Template

1. Click "Create New Template"
2. **Template ID**: `template_booking`
3. **Template Name**: `Lux Limousine Booking Template`
4. **Subject**: `{{subject}}`
5. **Email Body**: Copy the entire content from `booking-template.html`

### Step 3: Create Contact Template

1. Click "Create New Template"
2. **Template ID**: `template_contact`
3. **Template Name**: `Lux Limousine Contact Template`
4. **Subject**: `{{subject}}`
5. **Email Body**: Copy the entire content from `contact-template.html`

### Step 4: Test Your Booking Form

1. Save both templates in EmailJS
2. Go to http://localhost:3000/booking
3. Fill out and submit a test booking
4. Check for success message and email delivery

## Template Details

### ✨ Professional Booking Template Features:

- **Modern Corporate Design** - Clean, professional layout with gradient backgrounds
- **Responsive Design** - Mobile-friendly with adaptive grid layout
- **Visual Hierarchy** - Sectioned information with icons and clear typography
- **Customer Information Grid** - Professional data presentation
- **Service Details Dashboard** - Complete booking information in organized format
- **Priority Indicators** - Visual badges for urgent bookings
- **Action Required Section** - Highlighted follow-up instructions
- **Professional Footer** - Company branding and contact information
- **Enhanced Typography** - Segoe UI font family for modern appearance

### 💬 Professional Contact Template Features:

- **Executive Email Design** - Sophisticated layout for contact inquiries
- **Customer Message Display** - Beautifully formatted message presentation
- **Response Time Indicators** - Clear expectations for follow-up
- **Professional Grid Layout** - Organized customer information
- **Action Dashboard** - Structured follow-up instructions
- **Corporate Branding** - Consistent with company identity

### 🎨 Design Elements:

- **Color Scheme**: Gold gradients (#D4AF37 to #B8941F) with dark accents
- **Typography**: Segoe UI system font for professional appearance
- **Shadows & Effects**: Subtle box shadows and gradient overlays
- **Mobile Responsive**: Optimized for all device sizes
- **Visual Icons**: Emoji-based section identifiers
- **Professional Badges**: Status indicators and priority levels

## Troubleshooting

If you get "template not found" errors:

1. Make sure Template IDs are exactly: `template_booking` and `template_contact`
2. Ensure both templates are saved in your EmailJS dashboard
3. Check that your Service ID and Public Key are correct in `.env.local`
