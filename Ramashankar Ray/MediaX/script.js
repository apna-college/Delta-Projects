// Sample data to simulate posts and user interactions
const currentUser = {
    username: 'current_user',
    avatar: 'assets/images/default-avatar.png',
  };
  
  let postsData = [
    {
      id: 1,
      username: 'Pratik Poudel',
      avatar: 'assets/images/avatar1.png',
      contentType: 'image',
      content: 'assets/images/sample-1.jpg',
      caption: 'Beautiful day on campus!',
      likes: 2,
      comments: [
        { username: 'Laxmi Ray', text: 'Looks amazing!', avatar: 'assets/images/avatar2.png' },
        { username: 'Rohit Mahato', text: 'Wish I was there!', avatar: 'assets/images/avatar3.png' },
      ],
      likedByCurrentUser: false,
    },
    {
      id: 2,
      username: 'Laxmi Ray',
      avatar: 'assets/images/avatar2.png',
      contentType: 'note',
      content: 'assets/notes/sample-note.pdf',
      caption: 'Sharing my lecture notes from today.',
      likes: 1,
      comments: [{ username: 'Pratik Poudel', text: 'Thanks for this!', avatar: 'assets/images/avatar1.png' }],
      likedByCurrentUser: false,
    },
    {
      id: 3,
      username: 'Rohit Mahato',
      avatar: 'assets/images/avatar3.png',
      contentType: 'thought',
      content: "A good teacher is the cornerstone of education, embodying qualities that inspire and nurture students. They possess a deep understanding of their subject matter and have a genuine passion for teaching. This enthusiasm is contagious, sparking curiosity and a love for learning in their students. Patience and empathy are crucial traits of a good teacher; they understand that each student learns at their own pace and are always ready to offer support and encouragement. A good teacher creates an inclusive and engaging classroom environment where all students feel valued and heard. They employ innovative teaching methods, adapting their strategies to cater to diverse learning styles. Effective communication is key; they clearly convey concepts and provide constructive feedback that helps students improve. Beyond academic instruction, a good teacher mentors students, guiding them in their personal and social development.Respect is mutual in the relationship between a good teacher and their students. They lead by example, demonstrating integrity, respect, and responsibility. Their influence extends beyond the classroom, fostering a lifelong impact on their students’ attitudes, values, and success. In essence, a good teacher is not just an educator but a role model and a catalyst for positive change in their students' lives.",
      caption: '',
      likes: 3,
      comments: [],
      likedByCurrentUser: false,
    },
  ];
  
  // Function to load posts
  function loadPosts() {
    const feed = document.getElementById('feed');
    feed.innerHTML = '';
  
    postsData.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      // Post Header
      const postHeader = document.createElement('div');
      postHeader.classList.add('post-header');
  
      const avatar = document.createElement('img');
      avatar.src = post.avatar;
      avatar.alt = 'Avatar';
  
      const username = document.createElement('div');
      username.classList.add('username');
      username.textContent = post.username;
  
      postHeader.appendChild(avatar);
      postHeader.appendChild(username);
      postElement.appendChild(postHeader);
  
      // Post Content
      const postContent = document.createElement('div');
      postContent.classList.add('post-content');
  
      if (post.contentType === 'image') {
        const image = document.createElement('img');
        image.src = post.content;
        image.alt = 'Post Image';
        postContent.appendChild(image);
      } else if (post.contentType === 'note') {
        const noteLink = document.createElement('a');
        noteLink.href = post.content;
        noteLink.target = '_blank';
        noteLink.classList.add('note-link');
      
        // Create a strong element to wrap the text
        const strongText = document.createElement('strong');
        strongText.textContent = 'Download Notes';
      
        // Change the color to blue and add an icon
        noteLink.style.color = '#007BFF'; // Set the text color to blue
        noteLink.style.textDecoration = 'none'; // Remove underline
      
        // Create an icon element
        const downloadIcon = document.createElement('i');
        downloadIcon.className = 'fas fa-download'; // Font Awesome download icon
        downloadIcon.style.marginRight = '5px'; // Add some space between icon and text
      
        // Append the icon and strong text to the link
        noteLink.appendChild(downloadIcon);
        noteLink.appendChild(strongText);
        postContent.appendChild(noteLink);
      } else if (post.contentType === 'thought') {
        const thoughtText = document.createElement('p');
        thoughtText.textContent = post.content;
        postContent.appendChild(thoughtText);
      }
      
      
      if (post.caption) {
        const caption = document.createElement('p');
        caption.textContent = post.caption;
        postContent.appendChild(caption);
      }
  
      postElement.appendChild(postContent);
  
      // Post Footer
      const postFooter = document.createElement('div');
      postFooter.classList.add('post-footer');
  
      const actions = document.createElement('div');
      actions.classList.add('actions');
  
      // Like Button
      const likeButton = document.createElement('button');
      likeButton.innerHTML = post.likedByCurrentUser ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
      likeButton.addEventListener('click', () => toggleLike(post));
      likeButton.classList.add('like-button');
      const likeCount = document.createElement('span');
      likeCount.textContent = post.likes;
  
      // Comment Toggle
      const commentsToggle = document.createElement('button');
      commentsToggle.classList.add('comments-toggle');
      commentsToggle.textContent = `Comments (${post.comments.length})`;
      commentsToggle.addEventListener('click', () => {
        commentsSection.classList.toggle('hidden');
      });
  
      actions.appendChild(likeButton);
      actions.appendChild(likeCount);
      postFooter.appendChild(actions);
      postFooter.appendChild(commentsToggle);
      postElement.appendChild(postFooter);
  
      // Comments Section
      const commentsSection = document.createElement('div');
      commentsSection.classList.add('post-comments', 'hidden');
  
      post.comments.forEach((comment) => {
        renderComment(comment, commentsSection);
      });
  
      // Comment Form
      const commentForm = document.createElement('form');
      commentForm.classList.add('comment-form');
  
      const commentInput = document.createElement('input');
      commentInput.type = 'text';
      commentInput.placeholder = 'Add a comment...';
      commentInput.required = true;
  
      const commentButton = document.createElement('button');
      commentButton.type = 'submit';
      commentButton.textContent = 'Post';
  
      commentForm.appendChild(commentInput);
      commentForm.appendChild(commentButton);
  
      // Comment Submission
      commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (commentInput.value.trim() !== '') {
          const newComment = {
            username: currentUser.username,
            text: commentInput.value.trim(),
            avatar: currentUser.avatar,
          };
          post.comments.push(newComment);
          renderComment(newComment, commentsSection);
          commentInput.value = '';
          commentsToggle.textContent = `Comments (${post.comments.length})`;
        }
      });
  
      commentsSection.appendChild(commentForm);
      postElement.appendChild(commentsSection);
  
      feed.appendChild(postElement);
    });
  }
  
  // Function to render a comment
  function renderComment(comment, commentsSection) {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
  
    const commenterAvatar = document.createElement('img');
    commenterAvatar.src = comment.avatar;
    commenterAvatar.alt = 'Avatar';
  
    const commentTextContainer = document.createElement('div');
    commentTextContainer.classList.add('comment-text');
  
    const commenter = document.createElement('span');
    commenter.classList.add('username');
    commenter.textContent = comment.username;
  
    const commentText = document.createElement('span');
    commentText.textContent = ` ${comment.text}`;
  
    commentTextContainer.appendChild(commenter);
    commentTextContainer.appendChild(commentText);
  
    commentElement.appendChild(commenterAvatar);
    commentElement.appendChild(commentTextContainer);
  
    commentsSection.insertBefore(commentElement, commentsSection.lastElementChild);
  }
  
  // Function to toggle like
  function toggleLike(post) {
    post.likedByCurrentUser = !post.likedByCurrentUser;
    post.likes += post.likedByCurrentUser ? 1 : -1;
    loadPosts();
  }
  
  // Initialize the feed when the page loads
  document.addEventListener('DOMContentLoaded', loadPosts);
  

  function loadUserPosts(username) {
    const userPosts = postsData.filter(post => post.username === username);
    const userPostsContainer = document.getElementById('userPosts');
    userPostsContainer.innerHTML = '';
  
    if (userPosts.length === 0) {
      userPostsContainer.innerHTML = '<p>No posts to display.</p>';
      return;
    }
  
    userPosts.forEach((post) => {
      // Similar to loadPosts(), create post elements
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      // Reuse the code from loadPosts() to build the post content
      // Append to userPostsContainer
      // You may need to adjust paths or variables accordingly
    });
  }
  
  // On profile page load
  document.addEventListener('DOMContentLoaded', () => {
    loadUserPosts(currentUser.username);
  });
  


  // Show or hide file input based on content type
const contentTypeSelect = document.getElementById('contentType');
const fileUploadSection = document.getElementById('fileUploadSection');

contentTypeSelect.addEventListener('change', () => {
  if (contentTypeSelect.value === 'thought') {
    fileUploadSection.classList.add('hidden');
  } else {
    fileUploadSection.classList.remove('hidden');
  }
});

// Handle upload form submission
const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const contentType = contentTypeSelect.value;
  const caption = document.getElementById('caption').value.trim();
  const fileInput = document.getElementById('fileInput');
  let content = '';

  if (contentType !== 'thought' && fileInput.files.length === 0) {
    alert('Please select a file.');
    return;
  }

  if (contentType !== 'thought') {
    const file = fileInput.files[0];
    content = URL.createObjectURL(file);
    // Note: In a real application, you would upload the file to the server
  } else {
    content = caption;
  }

  // Create a new post object
  const newPost = {
    id: postsData.length + 1,
    username: currentUser.username,
    avatar: currentUser.avatar,
    contentType,
    content,
    caption,
    likes: 0,
    comments: [],
    likedByCurrentUser: false,
  };

  // Add the new post to postsData and redirect to homepage
  postsData.unshift(newPost);
  window.location.href = 'index.html';
});



// Simulate searching through posts
const searchInput = document.getElementById('searchInput');
const searchResultsContainer = document.getElementById('searchResults');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    searchResultsContainer.innerHTML = '';

    if (query === '') {
      searchResultsContainer.innerHTML = '<p>No results to display.</p>';
      return;
    }

    const results = postsData.filter(post =>
      post.username.toLowerCase().includes(query) ||
      post.caption.toLowerCase().includes(query) ||
      (post.contentType === 'thought' && post.content.toLowerCase().includes(query))
    );

    if (results.length === 0) {
      searchResultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }

    results.forEach(post => {
      // Similar to loadPosts(), create post elements and append to searchResultsContainer
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      // Reuse the code from loadPosts() to build the post content
      // Append to searchResultsContainer

      searchResultsContainer.appendChild(postElement);
    });
  });
}
