class ContactMailer < ApplicationMailer
  default from: 'questions@xaxis.com'

  def contact_email(contact)
    @contact = contact
    # Need to update the mail to
    mail(to: 'troy.starwalt@xaxis.com', subject: 'Question' + @contact.name)
  end
end
