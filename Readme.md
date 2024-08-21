


## How to Run the Project

Follow these steps to set up and run the Django project locally:

1. **Create and Activate a Virtual Environment**

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

2. **Install Dependencies**

    ```bash
    pip install -r requirements.txt
    ```

3. **Set Up the Django Project**

    ```bash
    cd pdf_extractor
    python manage.py migrate
    ```

4. **Run the Development Server**

    ```bash
    python manage.py runserver
    ```

5. **Access the Application**

    Open your browser and go to `http://127.0.0.1:8000/` to use the application.



