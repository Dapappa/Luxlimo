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

### Step 4: Create Discount/Spin Wheel Template

1. Click "Create New Template"
2. **Template ID**: `template_discount`
3. **Template Name**: `Lux Limousine Spin Wheel Discount`
4. **Subject**: `🎉 You Won {{discount_amount}} Off Your Next Luxury Ride!`
5. **Email Body**: Copy the entire content from `discount-template.html`

### Step 5: Test Your Forms

1. Save all templates in EmailJS
2. Go to http://localhost:3000/booking to test booking form
3. Go to http://localhost:3000 and scroll down 25% to test spin wheel
4. Check for success messages and email delivery

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

### 🎰 Spin-to-Win Discount Template Features:

- **Winner Celebration Design** - Exciting layout with congratulatory elements
- **Discount Showcase** - Large, prominent discount display with gradients
- **Discount Code Display** - Monospace code with copy-friendly formatting
- **Call-to-Action Button** - Prominent booking button with hover effects
- **Terms & Conditions** - Clear discount usage guidelines
- **Expiry Information** - Time-limited offer display
- **Mobile Optimized** - Responsive design for all devices
- **Brand Consistency** - Matches corporate identity
- **Rigged System** - Shows "up to 30%" but caps actual discounts at 5%

### 🎨 Design Elements:

- **Color Scheme**: Gold gradients (#D4AF37 to #B8941F) with dark accents
- **Typography**: Segoe UI system font for professional appearance
- **Shadows & Effects**: Subtle box shadows and gradient overlays
- **Mobile Responsive**: Optimized for all device sizes
- **Visual Icons**: Emoji-based section identifiers
- **Professional Badges**: Status indicators and priority levels

## Troubleshooting

If you get "template not found" errors:

1. Make sure Template IDs are exactly: `template_booking`, `template_contact`, and `template_discount`
2. Ensure all templates are saved in your EmailJS dashboard
3. Check that your Service ID and Public Key are correct in `.env.local`

### Spin Wheel Troubleshooting:

- **Wheel not appearing**: Scroll down past 25% of the homepage
- **Wheel shows again**: It only shows once per day (stored in localStorage)
- **Email not sending**: Check EmailJS template ID is `template_discount`
- **Testing**: Clear localStorage to reset daily limit
