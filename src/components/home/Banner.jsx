import { Carousel } from "flowbite-react";
import Container from "../shared/Container";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel className="" slideInterval={5000}>
            <img
              src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="..."
            />
            <img
              src="https://images.unsplash.com/photo-1499540633125-484965b60031?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="..."
            />
            <img
              src="https://images.unsplash.com/photo-1614934273801-0da56c52b081?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="..."
            />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="..."
            />
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="..."
            />
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
