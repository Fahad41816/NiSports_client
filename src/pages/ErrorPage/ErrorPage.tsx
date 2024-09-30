 
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  const handleGoHome = () => {
    navigate('/'); // Navigates to the home page
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <div>
            <Button   onClick={handleGoHome} style={{ marginRight: '10px', background:'#177C82', color:'#fff' }}>
              Back to Home
            </Button>
            <Button onClick={handleGoBack}>Go Back</Button>
          </div>
        }
        style={{ maxWidth: '500px', margin: '0 auto' }}
      />
    </div>
  );
};

export default ErrorPage;