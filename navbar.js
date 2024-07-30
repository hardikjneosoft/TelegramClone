function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.style.backgroundColor = 'white';
    // navbar.style.padding = '1rem';
    navbar.style.color = '#0088cc';
    navbar.style.position = 'fixed';
    navbar.style.top = 0;
    navbar.style.width = "100%";
    navbar.style.border = "1px solid #e8e8e8";
    navbar.style.paddingLeft = '10rem';
    navbar.style.paddingBottom = '15px';
    navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    navbar.style.zIndex = '10'
    const ul = document.createElement('ul');
    ul.style.listStyleType = 'none';
    ul.style.marginBottom = '0';
    ul.style.padding = '0';
    ul.style.display = 'flex';
    ul.style.alignItems = 'center'; // Align items vertically
    ul.style.flexDirection = 'row'; // Align items in a row
    ul.style.justifyContent = 'flex-start'; // Align items to the left
    ul.style.position = 'relative';

    // Define menu items
    const menuItems = [{ text: 'Home', href: './index.html' },
        { text: 'Login', href: 'login.html' },
        { text: 'Signup', href: 'signup.html' }]
    
    // Create list items and append them to the unordered list
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.style.position = 'relative'; // Necessary for the pseudo-element
        li.style.margin = '0 15px';
        li.style.fontSize= '1.5rem'
        li.style.cursor = 'pointer';
        li.style.paddingBottom = '0'; // Space for the blue bar
        // li.textContent = item.text;

        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        a.style.textDecoration = 'none'; // Remove underline from links
        a.style.color = 'inherit'; // Inherit text color from the list item
        a.style.display = 'inline-block'; // Ensure the link takes up the full space of the list item

        li.appendChild(a);
        
        // Create a pseudo-element for the blue bar
        const bar = document.createElement('div');
        bar.style.position = 'absolute';
        bar.style.bottom = '-15px';
        bar.style.left = '0';
        bar.style.height = '0.2rem';
        bar.style.width = '100%';
        bar.style.backgroundColor = '#0088cc'; // Blue bar color
        bar.style.transform = 'scaleX(0) scaleY(0)';
        bar.style.transformOrigin = 'bottom';
        bar.style.webkitTransition = 'opacity .2s ease-in-out, transform .2s ease-in-out'; // Smooth transition

        li.appendChild(bar);
        
        // Add hover effect for the blue bar
        li.addEventListener('mouseover', () => {
            bar.style.transform = 'scaleX(1)';
        });
        li.addEventListener('mouseout', () => {
            bar.style.transform = 'scaleX(0)';
        });
        
        ul.appendChild(li);
    });

    // Append the unordered list to the navbar
    navbar.appendChild(ul);
    
    // Append the navbar to the body
    document.body.prepend(navbar);
}

// Call the function to create the navbar
createNavbar();
