
---

# **Next.js Routing Overview**

## **Introduction**

Next.js provides a powerful and simple routing mechanism for building React applications. The routing system is **file-based**, meaning the file structure inside the `pages/` directory defines the routes in your application. This eliminates the need for manually configuring routes, making it easy to work with.

---

## **Basic Routing**

### **File-based Routing**
In Next.js, each file inside the `pages/` directory automatically becomes a route. For example:
- `pages/index.js`: This is the home page and accessible via `/`.
- `pages/about.js`: This will be available at `/about`.
- `pages/contact.js`: This will be available at `/contact`.

### **Nested Routes**
To create nested routes, you can organize your files into subdirectories:
```plaintext
pages/
  about/
    index.js    <-- accessible via /about
  blog/
    index.js    <-- accessible via /blog
    [id].js     <-- accessible via /blog/:id
```

---

## **Dynamic Routes**

Dynamic routes allow you to create pages that respond to URL parameters. You define dynamic routes using square brackets (`[ ]`).

### **Example of Dynamic Route**
```plaintext
pages/
  blog/
    [id].js    <-- accessible via /blog/1, /blog/2, etc.
```

### **Accessing Dynamic Route Parameters**
You can access dynamic parameters via the `useRouter` hook from `next/router`:
```javascript
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;  // id is the dynamic parameter
  return <p>Post ID: {id}</p>;
}

export default Post;
```

---

## **Advanced Routing**

### **Catch-All Routes**
Catch-all routes allow you to match multiple segments of a URL. You create them using triple brackets (`[...slug].js`):
```plaintext
pages/
  blog/
    [...slug].js  <-- matches routes like /blog/first-post, /blog/second-post/extra-info, etc.
```

### **Accessing Catch-All Route Parameters**
```javascript
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;  // slug will be an array
  return <p>Post Slug: {slug.join('/')}</p>;
};

export default Post;
```

---

## **Linking and Navigation**

### **Client-Side Navigation**
You can use Next.js’s built-in `Link` component to create client-side navigation. This improves performance by pre-fetching linked pages in the background.

```javascript
import Link from 'next/link';

const HomePage = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
    <Link href="/about">Go to About</Link>
  </div>
);

export default HomePage;
```

### **Programmatic Navigation**
You can navigate programmatically using the `useRouter` hook:
```javascript
import { useRouter } from 'next/router';

const SubmitButton = () => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/thank-you');
  };

  return <button onClick={handleClick}>Submit</button>;
};

export default SubmitButton;
```

---

## **Redirects and Rewrites**

### **Redirects**
Redirects allow you to automatically send users from one URL to another. You configure redirects in `next.config.js`:

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
};
```

### **Rewrites**
Rewrites allow you to serve content from one URL path but keep the original URL in the browser’s address bar:

```javascript
module.exports = {
  async rewrites() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
      },
    ];
  },
};
```

---

## **Conclusion**

Next.js routing simplifies the process of creating routes with automatic page generation and flexible handling of dynamic URLs. By leveraging file-based routing, dynamic routes, and powerful features like catch-all routes, redirects, and rewrites, you can build sophisticated and performant applications with ease.

---
