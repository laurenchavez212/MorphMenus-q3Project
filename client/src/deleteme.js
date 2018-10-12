<Col className="edit-form">
    {this.state.toggleEditForm && <form onSubmit={this.handleEditSubmit} className="container">
        <div className="col">
            <input
                className="form-control edit-input"
                id={this.props.question.question}
                type="text"
                value={this.state.editQuestion.question}
                onChange={this.handleEditChange}
                placeholder={this.props.question.question}
                name="question" />
        </div>
        <div className="col">
            <input
                className="form-control edit-input"
                id={this.props.question.img}
                type="text"
                value={this.state.editQuestion.img}
                onChange={this.handleEditChange}
                placeholder={this.props.question.img}
                name="img" />
        </div>
        <div className="col">
            <input
                className="form-control edit-input"
                type="text"
                value={this.state.editQuestion.A}
                onChange={this.handleEditChange}
                placeholder={this.props.question.A}
                name="A" />
        </div>
        <div className="col">
            <input
                className="form-control edit-input"
                id={this.props.question.B}
                type="text"
                value={this.state.editQuestion.B}
                onChange={this.handleEditChange}
                placeholder={this.props.question.B}
                name="B" />
        </div>
        <div className="col">
            <input
                className="form-control edit-input"
                id={this.props.question.C}
                type="text"
                value={this.state.editQuestion.C}
                onChange={this.handleEditChange}
                placeholder={this.props.question.C}
                name="C" />
        </div>
        <div className="col">
            <input
                className="form-control edit-input"
                id={this.props.question.D}
                type="text"
                value={this.state.editQuestion.D}
                onChange={this.handleEditChange}
                placeholder={this.props.question.D}
                name="D" />
        </div>
        <div className="col">
            <label className="edit-label" htmlFor={this.props.question.answer}>Answer</label>
            <input
                className="form-control edit-input"
                id={this.props.question.answer}
                type="text"
                value={this.state.editQuestion.answer}
                onChange={this.handleEditChange}
                placeholder={this.props.question.answer}
                name="answer" />
        </div>
        <div className="edit-btn">
            <button
                className="btn btn-style"
                value={this.props.question.id}
                type="submit">Edit this question
                                    </button>
        </div>
    </form>}
</Col>