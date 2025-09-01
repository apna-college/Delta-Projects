const sampleListings = [
  {
    name: "Anshika",
    email: "anshikayadav040@gmail.com",
    family_background: "Father is a farmer; mother is a homemaker.",
    challenges: "Financial constraints and limited educational resources in the village.",
    goals: "Wants to join the civil services.",
    higher_studies: "Pursuing B.A. (Hons) Political Science.",
    image: {
      url : "https://imgs.search.brave.com/IosFfAUW198am6vMcV2nU_7N6dRiqTHJ0SmoX0X27mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/L2Q1LzJjNDdkNWRk/NWI1MzJmODNiYjU1/YzRjZDZmNWJkMWVm/LmpwZw" ,
      filename : "filename.jpg"
    }
  },
  {
    name: "Arjun Meena",
    email: "meenaarjun633@gmail.com",
    family_background: "Father is a farmer; mother is a homemaker.",
    challenges: "Limited access to study materials and internet connectivity.",
    goals: "Aspires to become an IAS officer.",
    higher_studies: "Pursuing B.A. Programme.",
    image:  {
      url : "https://imgs.search.brave.com/IosFfAUW198am6vMcV2nU_7N6dRiqTHJ0SmoX0X27mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/L2Q1LzJjNDdkNWRk/NWI1MzJmODNiYjU1/YzRjZDZmNWJkMWVm/LmpwZw" ,
      filename : "filename.jpg"
    }
  },
  {
    name: "Amrit Kaur",
    email: "amritkaur3699@gmail.com",
    family_background: "Father is a driver; mother is a homemaker.",
    challenges: "Struggles financially to afford tuition and books.",
    goals: "Wants to be a Chartered Accountant.",
    higher_studies: "Pursuing B.Com (Hons).",
    image: {
      url : "https://imgs.search.brave.com/IosFfAUW198am6vMcV2nU_7N6dRiqTHJ0SmoX0X27mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/L2Q1LzJjNDdkNWRk/NWI1MzJmODNiYjU1/YzRjZDZmNWJkMWVm/LmpwZw" ,
      filename : "filename.jpg"
    }
  },
  {
    name: "Deepika",
    email: "deepikajangid987@gmail.com",
    family_background: "Father is a tailor; mother is a homemaker.",
    challenges: "Managing college with part-time job to support studies.",
    goals: "Wants to be a software engineer.",
    higher_studies: "Pursuing B.Sc. Computer Science.",
    image:  {
      url : "https://imgs.search.brave.com/IosFfAUW198am6vMcV2nU_7N6dRiqTHJ0SmoX0X27mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/L2Q1LzJjNDdkNWRk/NWI1MzJmODNiYjU1/YzRjZDZmNWJkMWVm/LmpwZw" ,
      filename : "filename.jpg"
    }
  },
  {
    name: "Shubham",
    email: "shubham.rawat@gmail.com",
    family_background: "Single mother working as a nurse.",
    challenges: "Juggling family responsibilities with studies.",
    goals: "Aspires to become a doctor.",
    higher_studies: "Pursuing B.Sc. Life Sciences.",
    image: {
      url : "https://imgs.search.brave.com/IosFfAUW198am6vMcV2nU_7N6dRiqTHJ0SmoX0X27mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/L2Q1LzJjNDdkNWRk/NWI1MzJmODNiYjU1/YzRjZDZmNWJkMWVm/LmpwZw" ,
      filename : "filename.jpg"
    }
  },
  {
    name: "Sneha Kumari",
    email: "sneha.kumari12@gmail.com",
    family_background: "Father is a shopkeeper; mother helps in shop.",
    challenges: "Limited access to online learning tools.",
    goals: "Wants to become a school teacher.",
    higher_studies: "Pursuing B.A. (Hons) English.",
    image:  {
      url : "https://imgs.search.brave.com/IosFfAUW198am6vMcV2nU_7N6dRiqTHJ0SmoX0X27mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/L2Q1LzJjNDdkNWRk/NWI1MzJmODNiYjU1/YzRjZDZmNWJkMWVm/LmpwZw" ,
      filename : "filename.jpg"
    }
  },
  {
    name: "Ravi Kumar",
    email: "ravi.kumar987@gmail.com",
    family_background: "Father works in a factory; mother is a homemaker.",
    challenges: "Long commute to college, financial limitations.",
    goals: "Wants to pursue MBA.",
    higher_studies: "Pursuing B.Com Programme.",
    image: {
      url : "https://imgs.search.brave.com/IosFfAUW198am6vMcV2nU_7N6dRiqTHJ0SmoX0X27mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/L2Q1LzJjNDdkNWRk/NWI1MzJmODNiYjU1/YzRjZDZmNWJkMWVm/LmpwZw" ,
      filename : "filename.jpg"
    }
  },
  {
    name: "Priya Singh",
    email: "priya.singh03@gmail.com",
    family_background: "Father is retired; mother is unwell.",
    challenges: "Takes care of home and studies simultaneously.",
    goals: "Wants to be a psychologist.",
    higher_studies: "Pursuing B.A. Psychology (Hons).",
    image:  {
      url : "https://imgs.search.brave.com/IosFfAUW198am6vMcV2nU_7N6dRiqTHJ0SmoX0X27mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/L2Q1LzJjNDdkNWRk/NWI1MzJmODNiYjU1/YzRjZDZmNWJkMWVm/LmpwZw" ,
      filename : "filename.jpg"
    }
  },
  {
    name: "Mohit Verma",
    email: "mohit.verma22@gmail.com",
    family_background: "Parents run a small grocery shop.",
    challenges: "Struggles to get internet access in rural area.",
    goals: "Wants to work in IT industry.",
    higher_studies: "Pursuing B.Sc. Mathematics.",
    image:  {
      url : "https://imgs.search.brave.com/IosFfAUW198am6vMcV2nU_7N6dRiqTHJ0SmoX0X27mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/L2Q1LzJjNDdkNWRk/NWI1MzJmODNiYjU1/YzRjZDZmNWJkMWVm/LmpwZw" ,
      filename : "filename.jpg"
    }
  },
  {
    name: "Nikita Sharma",
    email: "nikitasharma94@gmail.com",
    family_background: "Single-parent household; mother is a teacher.",
    challenges: "Financial pressure and household responsibilities.",
    goals: "Aims to clear UPSC exams.",
    higher_studies: "Pursuing B.A. History (Hons).",
    image:  {
      url : "https://imgs.search.brave.com/IosFfAUW198am6vMcV2nU_7N6dRiqTHJ0SmoX0X27mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/L2Q1LzJjNDdkNWRk/NWI1MzJmODNiYjU1/YzRjZDZmNWJkMWVm/LmpwZw" ,
      filename : "filename.jpg"
    }
  }
];

module.exports = { data: sampleListings };
