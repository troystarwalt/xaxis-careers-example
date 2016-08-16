class Contact < MailForm::Base
  attribute :name, :validate => true
  attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message

  def headers
    {
      :subject => "Message from Xaxis Careers",
      :to => "troy.starwalt@xaxis.com",
      :from => %("#{name}" <#{email}>)
    }
  end

end
