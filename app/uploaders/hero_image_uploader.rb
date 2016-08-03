# encoding: utf-8

class HeroImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  storage :file
  # storage :fog

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  def default_url
    case version_name
    when :thumb
      "http://placehold.it/50x40"
    when :small
      "http://placehold.it/100x80"
    when :medium
      "http://placehold.it/200x160"
    when :large
      "http://placehold.it/400x225"
    when :extra_large
      "http://placehold.it/800x450"
    when :jumbotron
      "http://placehold.it/1600x900"
    else
      "http://placehold.it/1600x900"
    end
  end

  # Create different versions of your uploaded files:
  version :thumb do
    process :resize_to_fill => [50, 40]
  end
  version :small do
    process :resize_to_fill => [100, 80]
  end
  version :medium do
    process :resize_to_fill => [200, 160]
  end
  version :large do
    process :resize_to_fill => [400, 225]
  end
  version :extra_large do
    process :resize_to_fill => [800, 450]
  end
  version :jumbotron do
    process :resize_to_fill => [1600, 900]
  end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_white_list
    %w(jpg jpeg gif png)
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  def filename
    "#{model.name.parameterize}.png" if original_filename
  end

end
