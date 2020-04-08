# frozen_string_literal: true

model = command_options.shift.constantize
command_options.inject(nil) { |_record, command| model.send(command) }
