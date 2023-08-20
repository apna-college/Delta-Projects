#Resume Builder Web App
[live link of the application is also available at the end of this page...]
This Online Resume builder app is created by using following technologies/ dependencies:
1. React
2. Tailwind css
3. jspdf
4. html2canvas
5. react-router-dom
6. spinners-react
7. react-icons

[ Note - You can see all dependencies in package.json file. ]

#Functionalities:
1. Design fresher friendly resume template so anybody can add their details any easily get their resume within minutes.
2. Easy to use.
3. You can download your builded resume in pdf format.
4. Your pdf saved is in A4 paper size so that anyone can take print out of the same.
5. Implement fetaures like lazy loading which increases the performance of the overall application.
6. Added spinners so that during loading of pages user can stay on the page.

#Overall Work Flow of application:
So basically this project is fully react functional component based project where i use the following hooks:

1. useContext API 
2. useReducer Hook
3. useState Hook
4. useRef Hook
5. forward Ref Hook
6. useEffect Hook

So the terminology of app is: 
When user open the app they get an attractive UI where they can read all about the app or directly clicked on Get Started. After clicking on Get Started user have many options to choose their resume template. But at a time [20-08-2023] only a single template is functional. On other templates work is under process. After selection of template user has another UI page where user can see two sides of the page. On one side there is a resume display where they can see the live changes. On the other side of the page user can see a number of input fields from which they can change all the details which are write on the display side of the resume for the user reference. After completion of details by the user they can see full page review by clicking on the Full Page Preview button which is availiable on the last of the Editing side of the page. After clicking on the button user get the full page preview of their resume. And on that page User get the Download button. By clicking on the same a pop up window will appear on the user phone/laptop to save the reume. The resume will save with the same name as they entered in the building process. After the success of downloading process. You got your resume within minutes.

Flaws or Bugs of application:
1. In the links section:
links cannot be access by anyone because the pdf is is converted from JPEG/PNG format. [I am working on it...]

2. In skills section [user have to delete the pre defined skills manually by typing the skill name.]


Here is the live link of the application: 

https://resume-builder-by-arun.vercel.app/