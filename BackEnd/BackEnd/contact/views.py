# views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail

class send_project_request(APIView):
    permission_classes = []  

    def post(self, request):
        data = request.data
        user_email = data.get('email') 
        if not user_email:
            return Response({'error': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)

        project_type = data.get('project_type', 'Not provided')
        min_price = data.get('min_price', 'Not provided')
        max_price = data.get('max_price', 'Not provided')
        message = data.get('message', 'No message')

        email_subject = f'New Project Request from {user_email}'
        email_body = f"""
        You got a new project request!

        Sender Email: {user_email}
        Project Type: {project_type}
        Price Range: ${min_price} - ${max_price}
        Message:
        {message}
        """

        send_mail(
            subject=email_subject,
            message=email_body,
            from_email='mateasanidze808@gmail.com',  
            recipient_list=['mateasanidze808@gmail.com'],  
            fail_silently=False,
        )

        return Response({'detail': 'Request sent successfully.'}, status=status.HTTP_200_OK)
