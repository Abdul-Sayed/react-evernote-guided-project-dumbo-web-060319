class NotesController < ApplicationController
  before_action :find_note, only: [:show, :update, :destroy]

  def index
    notes = Note.all
    # render json: notes, status: 200
    render json: notes, include: [:title, :body]
    # same as //=> render json: notes, only: [:id, :title, :body]
    # //=> Another option: render json: notes, except: [:created_at, :updated_at]
    # To show nested models, use render json: notes, include '**'
  end

  def show
    if note
      render json: note, status: 200
      # or render json: note, only: [:id, :title, :body]
    else
      render json: { message: "Note not found" }
    end
  end

  def create
    # note = Note.create(note_params)
    # render json: note, status: 201

    note = Note.new(note_params)
    if note.valid?
      (render json: note, include: [:title, :body], status: 201) if note.save
    else
      render json: { message: "Note cannot be saved" }
    end
  end

  def update
    note.update(note_params)
    # render json: note, status: 200
    render json: note, include: [:title, :body], status: 200
  end

  def destroy
    noteId = note.id
    note.destroy
    render json: { message: "Zap! note deleted", noteId: noteId }
  end

  private

  def find_note
    note = Note.find(params[:id])
  end

  def note_params
    params.permit(:title, :body, :user_id)
  end
end
