# Sample application for Rails 3.2

Demonstrates how to integrate [`jquery.fileDownload.js`](https://github.com/johnculviner/jquery.fileDownload)
into a Rails 3.2 application using the [`jquery_file_download-rails`](https://github.com/rcook/jquery_file_download-rails)
gem.

The full sample application is available [here](https://github.com/rcook/jquery_file_download-rails-samples/tree/master/rails-3.2/download-demo).

## Configuration

* Ruby 2.0.0-p353
* Rails 3.2.21

## Step-by-step instructions

### 1. Create skeleton application

```bash
$ rails _3.2.21_ new download-demo
```

### 2. Configure Ruby version

Content for [`.ruby-version`](https://github.com/rcook/jquery_file_download-rails-samples/blob/master/rails-3.2/download-demo/.ruby-version):

```text
2.0.0-p353
```

### 3. Generate controller

```bash
$ bundle exec rails generate controller downloads
```

### 4. Create sample text file

Content for [`file.txt`](https://github.com/rcook/jquery_file_download-rails-samples/blob/master/rails-3.2/download-demo/file.txt):

```text
Hello world
```

### 5. Create simple view with download link

Content for [`app/views/downloads/page.html.erb`](https://github.com/rcook/jquery_file_download-rails-samples/blob/master/rails-3.2/download-demo/app/views/downloads/page.html.erb):

```erb
<%= link_to 'Download file', downloads_file_path, id: 'download' %>
```

### 6. Add page and file actions to controller

Content for [`app/controllers/downloads_controller.rb`](https://github.com/rcook/jquery_file_download-rails-samples/blob/master/rails-3.2/download-demo/app/controllers/downloads_controller.rb):

```ruby
class DownloadsController < ApplicationController
  def page
  end

  def file
    cookies['fileDownload'] = 'true'

    send_file File.join(Rails.root, 'file.txt'),
      filename: 'downloaded-file.txt',
      type: 'content-type',
      x_sendfile: true
  end
end
```

### 7. Add routes for new actions

Add following lines to [`config/routes.rb`](https://github.com/rcook/jquery_file_download-rails-samples/blob/master/rails-3.2/download-demo/config/routes.rb):

```ruby
  get '/downloads/page', to: 'downloads#page'
  get '/downloads/file', to: 'downloads#file'
```

### 8. Rename controller CoffeeScript file and replace content

Rename the file:

```bash
$ mv app/assets/javascripts/downloads.js.coffee app/assets/javascripts/downloads.js
```

Content for [`app/assets/javascripts/downloads.js`](https://github.com/rcook/jquery_file_download-rails-samples/blob/master/rails-3.2/download-demo/app/assets/javascripts/downloads.js):

```javascript
$(function () {
  $("#download").on("click", function (e) {
    e.preventDefault();
    $.fileDownload($(this).prop("href"), {
      successCallback: function (url) { alert("Success"); },
      failCallback: function (url) { alert("Fail"); }
    });
  });
});
```

### 9. Add `jquery_file_download-rails` to `Gemfile` and update gems

Add following line to [`Gemfile`](https://github.com/rcook/jquery_file_download-rails-samples/blob/master/rails-3.2/download-demo/Gemfile):

```ruby
gem 'jquery_file_download-rails'
```

Update installed gems:

```bash
$ bundle install
```

### 10. Add library to JavaScript manifest

Add following line to [`app/assets/javascripts/application.js`](https://github.com/rcook/jquery_file_download-rails-samples/blob/master/rails-3.2/download-demo/app/assets/javascripts/application.js):

```javascript
//= require jquery.fileDownload
```

## Licence

These samples are released under the MIT licence.

