The `useParams` hook within nested routes using `Outlet` might not update reliably. A workaround is to use `useLocation` hook and extract params manually:
```javascript
import { useLocation } from 'react-router-dom';

function ChildComponent() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id'); // Extract params manually

  return (
    <div>
      <h1>Child Component</h1>
      <p>ID: {id}</p>
    </div>
  );
}
```
This manually extracts parameters from the URL, ensuring that the component always reflects the current URL parameters, irrespective of the nested route structure using `Outlet`.