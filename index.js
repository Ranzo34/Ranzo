const navMenu = document.getElementById('nav-menu'),
        toggleMenu = document.getElementById('nav-toggle'),
        closeMenu = document.getElementById('nav-close')

        toggleMenu.addEventListener('click', ()=>{
            navMenu.classList.toggle('show')
        })

        closeMenu.addEventListener('click', ()=>{
            navMenu.classList.remove('show')
        })

        const navLink = document.querySelectorAll('.nav__link')

        function linkAction(){
            navMenu.classList.remove('show')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction))

        const sections = document.querySelectorAll('section[id]')
        window.addEventListener('scroll', scrollActive)

        function scrollActive(){
            const scrollY = window.pageYOffset

            sections.forEach(current =>{
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50
                sectionID = current.getAttribute('id')

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.add('active')
                }else{
                    document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.remove('active')
                }
            })
        }

/*******************************************************************************************************************************************/

        const form = document.querySelector('form');
      
        form.addEventListener('submit', async function(event) {
          event.preventDefault();
      
          const formData = new FormData(this);
      
          try {
            const response = await fetch(this.action, {
              method: 'POST',
              body: formData,
              headers: {
                'Accept': 'application/json'
              }
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            alert('Message sent successfully!');
            form.reset();
          } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again later.');
          }
        });