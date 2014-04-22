# Compass configuration file.

# We also support plugins and frameworks, please read the docs http://docs.mixture.io/preprocessors#compass
# Susy (susy.oddbird.net) is available in Mixture, just uncomment to require and use
# require 'susy'
require 'sass-globbing'
require 'autoprefixer-rails'

project_path = File.expand_path("..",File.dirname(__FILE__))

# Important! change the paths below to match your project setup

css_dir = "assets/css" # update to the path of your css files.

sass_dir = "assets/sass" # update to the path of your sass files.

images_dir = "assets/images" # update to the path of your image files.

javascripts_dir = "assets/js" # update to the path of your script files.

line_comments = false

cache = true

Sass::Script::Number.precision = 14

on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << AutoprefixerRails.process(css, browsers: ["last 2 versions", "> 5%", "ie 9"])
  end
end
