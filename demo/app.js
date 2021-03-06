/*
 * CookieConsent v1.2
 * https://www.github.com/orestbida/cookieconsent
 * Author Orest Bida
 * Released under the MIT License
*/
(function(){

	// obtain cookieconsent plugin
	var cc = initCookieConsent();

	// run plugin with config object
	cc.run({
		cc_autorun : true, 								// show as soon as possible (without the need to manually call CookieConsent.show() )
		cc_delay : 0,								    // specify initial delay after website has loaded		
		cc_enable_verbose : true,						// if enabled, prints all info/error msgs (not available on dist version)
		cc_current_lang : 'it',		
		cc_policy_url : null,                           // specify your own dedicated cookie policy page url
		cc_auto_language : true,						// if enabled, overrides cc_current_lang
		cc_cookie_expiration : 	365,    				// [NEW FROM version 1.2]
		cc_autoclear_cookies : true,					// [NEW FROM version 1.2]
		cc_autoload_css : true, 						// [NEW FROM version 1.2]
		cc_theme_css : "../src/cookieconsent.css",	
		cc_accept_callback : function(cookies){
			console.log("cookie consent is accepted with the following cookie-values: ", cookies);
			
			//Example: if functionality cookies are enabled do something ...
			if(cookies!= null && cookies.level.includes('functionality_cookies')){
				// js code here
			}
		},

		cc_languages : [
			{
				lang : 'en',
				modal : {
					cc_title :  "I use cookies",
					cc_more_text :  "Learn more", 
					cc_accept_text : "I understand",
					cc_description :  'My website uses essential cookies necessary for its functioning. By continuing browsing, you consent to my use of cookies and other technologies.',
				},
				policy : {
					ccp_title : "Cookie Policy",
					// ccb_table_headers is REQUIRED if any ccb_cookies_table is used
					ccb_table_headers : [
						{col1: "Name" }, 
						{col2: "Domain" }, 
						{col3: "Expiration" }, 
						{col4: "Description" }, 
						{col5: "Type" }
					],
					ccp_blocks : [
						{
							ccb_title : "What are cookies",
							ccb_description: 'Cookies are very small text files that are stored on your computer when you visit a website. I use cookies to assure the basic functionalities of the website and to enhance your online experience. I use many different types of cookies which you can check on the sections below.'
						},{
							ccb_title : "Strictly necessary cookies",
							ccb_description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.',
							ccb_cookies_table : [
								{
									col1: 'cc_cookie',
									col2: 'orestbida.com',
									col3: 'After 3 months (Starting from the moment the cookie-consent was accepted)',
									col4: 'Used to know whether a visitor has accepted the cookie consent or not.',
									col5: 'Permanent cookie'
								},
								{
									col1: 'cc_level',
									col2: 'orestbida.com',
									col3: 'After 3 months (Starting from the moment the cookie-consent was accepted)',
									col4: 'Used to know the accepted level of cookie consent (E.g.  essential cookie only, full cookie consent ...)',
									col5: 'Permanent cookie'
								},
								{
									col1: 'cc_level2',
									col2: 'orestbida.com',
									col3: 'After 3 months (Starting from the moment the cookie-consent was accepted)',
									col4: 'Used to know the accepted level of cookie consent (E.g.  essential cookie only, full cookie consent ...)',
									col5: 'Permanent cookie'
								}
							],
							ccb_switch : {
								value : 'necessary_cookies',
								enabled : true,
								readonly: true
							}
						},{
							ccb_title : "Functionality cookies",
							ccb_description: 'These cookies are used to provide you with a more personalized experience on my website and to remember choices you make when you browse the website. For example, whether or not you enabled dark-mode on this website.',
							ccb_switch : {
								value : 'functionality_cookies',
								enabled : true,
								readonly: false
							},
							ccb_cookies_table: [
								{
									col1: 'cc_darkmode',
									col2: 'orestbida.com',
									col3: 'One week after the cookie has been created',
									col4: 'Secure connections only, Content: <span style="word-break: break-word;">AHWqTUn0x1l8j_qWOD0zBGG646eTNjqLQxNQ-wywrCEsS33DLylxgvZ7I98N1Xz_</span>' ,
									col5: 'Permanent cookie'
								}
							]
						},{
							ccb_title : "More information",
							ccb_description: 'For any queries in relation to my policy on cookies and your choices, please contact me.',
						}
					],
					ccp_save_text : "Save preferences"
				}
			}
		]
	});
	
	/*
	 * The following lines of code are for demo purposes (show api functions)
	 */ 
	if(document.addEventListener){
		document.getElementById("btn1").addEventListener('click', function(){
			autorun();
		});

		document.getElementById("btn2").addEventListener('click', function(){
			cc.show(0);
		});

		document.getElementById("btn3").addEventListener('click', function(){
			cc.hide();
		});

		document.getElementById("btn4").addEventListener('click', function(){
			cc.clearCookies();
		});

		document.getElementById("btn5").addEventListener('click', function(){
			cc.show_policy(0);  
		});

		document.getElementById("btn6").addEventListener('click', function(){
			document.body.classList.toggle('cc_darkmode');
		});
	}else{
		document.getElementById("btn1").attachEvent('onclick', function(){
			autorun();
		});

		document.getElementById("btn2").attachEvent('onclick', function(){
			cc.show(0);
		});

		document.getElementById("btn3").attachEvent('onclick', function(){
			cc.hide();
		});

		document.getElementById("btn4").attachEvent('onclick', function(){
			cc.clearCookies();
		});

		document.getElementById("btn5").attachEvent('onclick', function(){
			cc.show_policy(0);  
		});

		document.getElementById("btn6").attachEvent('onclick', function(){
			console.log("clicked");
			document.body.classList.toggle('cc_darkmode');
		});
	}
})();