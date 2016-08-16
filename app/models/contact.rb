class Contact < MailForm::Base
  attribute :name, :validate => true
  attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message, :validate => true
  attribute :nickname, :captcha => true  # This is a spam blocker.

  def headers
    {
      :subject => "Question from Xaxis Careers",
      :to => "troy.starwalt@xaxis.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end
