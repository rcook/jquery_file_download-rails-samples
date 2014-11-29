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

